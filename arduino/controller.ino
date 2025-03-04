#include <Servo.h>

Servo myServo;
int pos = 0; // Servo position
bool enableServo = true;
int delayValue = 15; // Delay for servo movement

void setup() {
  Serial.begin(9600);  // Start serial communication
  myServo.attach(3);   // Attach servo to pin 3
}

void loop() {
  if (Serial.available() > 0) {
    int targetAngle = Serial.parseInt();  // Read the angle from Serial
    Serial.read();
    if (targetAngle >= 0 && targetAngle <= 180) {
      moveServoSlowly(targetAngle);  // Move servo slowly to the desired angle
      Serial.print("Received angle: ");
      Serial.println(targetAngle);  // Print the received angle to Serial Monitor
    }
  }
}

void moveServoSlowly(int targetAngle) {
  int currentAngle = myServo.read();  // Get the current angle of the servo
  if (currentAngle < targetAngle) {
    for (int angle = currentAngle; angle <= targetAngle; angle++) {
        if (enableServo) {
          myServo.write(angle);
          delay(delayValue);  // Adjust delay for speed control
        }
        Serial.print("Moving:");
        Serial.println(angle);
    }
  } else {
    for (int angle = currentAngle; angle >= targetAngle; angle--) {
        if (enableServo) {
            myServo.write(angle);
            delay(delayValue);  // Adjust delay for speed control
          }
          Serial.print("Moving:");
          Serial.println(angle);
    }
  }
}
