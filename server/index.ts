import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";
import express, { type Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Change port to match your Arduino's port (e.g., COM3 on Windows, /dev/ttyUSB0 on Linux/Mac)
const port = new SerialPort({ path: '/dev/tty.usbmodem11201', baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

port.on("open", () => {
  console.log("Serial port connected");
});

parser.on("data", (data: string) => {
  console.log("Arduino says:", data);
});

// Function to send angle to Arduino
async function moveServo(angle: number): Promise<void> {
  if (angle >= 0 && angle <= 180) {
    await port.write(angle.toString() + "\n");
  } else {
    console.log("Angle must be between 0 and 180");
  }
}

// Function to delay execution for a given number of milliseconds
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Slot to angle mapping
const slotToAngle: { [key: number]: number } = {
  1: 0,
  2: 60,
  3: 120,
  4: 180
};

// Express server setup
const app: Express = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/move-servo", async (req, res) => {
  const slot: number = req.body.slot;
  const angle = slotToAngle[slot];

  if (angle !== undefined) {
    await moveServo(angle);
    res.status(200).send(`Moved servo to angle ${angle} for slot ${slot}`);
  } else {
    res.status(400).send("Invalid slot number");
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});