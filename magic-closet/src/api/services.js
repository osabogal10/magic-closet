
export const selectShoe = async (shoeId) => {
    console.log(`Mandar al back el id ${shoeId}`)
    const backendUrl = process.env.BACK_URL ?? 'http://localhost:3001';
    try {
      const response = await fetch(`${backendUrl}/move-servo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slot: shoeId }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Response from server:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }