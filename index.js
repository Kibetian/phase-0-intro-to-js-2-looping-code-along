// Function to generate thank you messages
function writeCards(names, gift) {
    const thankYouMessages = [];
  
    names.forEach((name) => {
      thankYouMessages.push(`Thank you, ${name}, for the wonderful ${gift} gift!`);
    });
  
    return thankYouMessages;
  }
  
  // Function to count down from a given number
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }