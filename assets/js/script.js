// generate a random number between 1-100
function genRandomNumber() {                                  //TODO: change back to 100
    let randomNumber = Math.floor((Math.random() * 10) + 1); //source: https://www.w3schools.com/jsref/jsref_random.asp
    return randomNumber;
}

let randomNumber = genRandomNumber(); // var to hold the RND#

//access and load elements & compare randomNumber against userNumber

document.addEventListener("DOMContentLoaded", function () {
    let userNumber = document.getElementById('number'); //.value; //do I have to put .value or not?
    let message = document.getElementsByClassName("feedback-message")[0];
    let button = document.querySelector('input[value="Guess"]');

    if (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // source: (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

           
            // get the users guess number
                     let guess = parseInt(userNumber.value);

            // to check users guess and compare it with RND#
            if (guess === randomNumber) {
                message.textContent = "Congratulations! You guessed it right!";
                popup();


            } else if (guess < randomNumber) {

                message.textContent = "That was too low. Guess again!";
            } else {
                message.textContent = "That was too high. Guess again!";
            }
        });
    }
});
    



// Function to show a play again popup

function popup() {
    let playAgain = confirm("Congratulations! You guessed it right! Do you want to play again?");
    if (playAgain) {
        resetGame();
    } else {
        alert("Goodbye, see you soon!");
        document.getElementById('number').disabled = true;
    }
}

// function to reset the game
function resetGame() {
    randomNumber = genRandomNumber();
    userNumber.value = "";
    document.getElementsByClassName("feedback-message")[0].textContent = "";
    document.getElementById('number').disabled = false;
    

}