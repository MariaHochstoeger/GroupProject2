    //game global varibles
    let userNumber = document.getElementById('number');
    let message = document.getElementsByClassName("feedback-message")[0];
    let button = document.querySelector('input[value="Guess"]');
    let randomNumber = genRandomNumber(); // var to hold the RND#

    // generate a random number between 1-100
    function genRandomNumber() { //TODO: change back to 100
        let randomNumber = Math.floor((Math.random() * 10) + 1); //source: https://www.w3schools.com/jsref/jsref_random.asp
        return randomNumber;
    }

    //access and load elements & compare randomNumber against userNumber
    document.addEventListener("DOMContentLoaded", function () {

        if (button) {
            button.addEventListener("click", function (event) {
                event.preventDefault(); // source: (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

                // get the users guess number
                let guess = parseInt(userNumber.value);

                // Check if the input is a valid number
                if (!isNaN(guess) && guess >= 1 && guess <= 10) {

                    // to check users guess and compare it with RND#
                    if (guess === randomNumber) {
                        message.classList.add('expand-message'); // Apply the expand effect for congratulat message -- https://speckyboy.com/css-javascript-text-animation-snippets
                        message.textContent = "Congratulations! You guessed it right! The correct number was " + randomNumber;
                        userNumber.value = "";

                        setTimeout(function() {
                            message.classList.remove('expand-message'); // Remove the expand effect class
                            popup();
                        }, 1500);

                    } else if (guess < randomNumber) {

                        message.textContent = "That was too low. Guess again!";
                        userNumber.value = "";
                    } else {
                        message.textContent = "That was too high. Guess again!";
                        userNumber.value = "";
                    }
                } else {
                    message.textContent = "Please enter a valid number between between 1 and 10.";
                    userNumber.value = "";
                }
            });

            // preventing decimal numbers in the input field...
            //(source)https://stackoverflow.com/questions/7279047/how-to-prevent-user-from-entering-decimals
            userNumber.addEventListener("input", function () {
                this.value = Math.round(this.value);
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
            document.getElementsByClassName("feedback-message")[0].textContent = "";
        }
    }

    // function to reset the game
    function resetGame() {
        randomNumber = genRandomNumber();
        userNumber.value = "";
        document.getElementsByClassName("feedback-message")[0].textContent = "";
        document.getElementById('number').disabled = false;


    }