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



