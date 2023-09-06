
// generate a random number between 1-100
function genRandomNumber() {
    let randomNumber = Math.floor((Math.random() * 100) + 1); //taken from https://www.w3schools.com/jsref/jsref_random.asp
    return randomNumber;
}

//compare randomNumber against userNumber
let userNumber = document.getElementById('number').value; //do I have to put .value or not?
if (userNumber === randomNumber) {
    //Mohamed to write code for success message
} else if (userNumber < randomNumber) {
    //Mohamed to write code for too low message
} else {
    //Mohamed to write code for too high message
};




     // access the html elements

   
    
    // Get the users guess number

    // Check if the user's guess is a valid number

    // Check if the user's guess is correct

    // Calculate the percentage difference ----(optional)

    // Send feedback message based on answer 
    
    // Clear the input field

    // Decrement chances ----(optional)

    // Check if chances are exhausted ----(optional)

    // Display a message with options to try again or quit

    // Reset the game 

