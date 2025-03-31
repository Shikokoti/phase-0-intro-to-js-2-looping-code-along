// Code your solutions in this file

// for (let age=30; age<40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//  for (let i=0; i<gifts.length; i++){
//     console.log(`Wrapped ${gifts[i]} and added a bow!`)
//  }
//  return gifts;
// }
// wrapGifts(gifts);

function writeCards(names, event) {
    // Step 1: Create an empty array to store messages
    let messages = [];
    
    // Step 2: Loop through the names array
    for (let i = 0; i < names.length; i++) {
      // Step 3: Create a thank-you message using string interpolation
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      
      // Step 4: Add the message to the messages array
      messages.push(message);
    }
    
    // Step 5: Return the array of thank-you messages
    return messages;
  }
  
  // Example input
  const names = ["Guadalupe", "Ollie", "Aki"];
  const event = "surprise";
  
  // Call the function and store the result
  const resultMessages = writeCards(names, event);

  function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}
  
  // Log the output
  console.log(resultMessages);
  
  