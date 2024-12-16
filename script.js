let buttons = document.querySelectorAll('button');

let choices = ["rock", "paper", "scissors"];
let result = document.querySelector('#result');

let userNumber = 0;
let computerNumber = 0;

function checkWin(userChoice) {
    let userScore = document.querySelector('#userScore');
    let computerScore = document.querySelector('#computerScore');
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomNumber];
    console.log(`userValue : ${userChoice} computerChoice : ${computerChoice}`);
    if (userChoice === computerChoice) {
        result.innerText = "It's a tie!";
    }
    else {
        if (userChoice == "rock" && computerChoice == "scissors") {
            result.innerText = `User wins ! ${userChoice} beats ${computerChoice}`;
            userNumber += 1;
            userScore.innerText = userNumber;
        }
        else if (userChoice == "rock" && computerChoice == "paper") {
            result.innerText = `Computer wins ! ${computerChoice} beats ${userChoice}`;
            computerNumber += 1;
            computerScore.innerText = computerNumber;
        }
        else if (userChoice == "paper" && computerChoice == "scissors") {
            result.innerText = `Computer wins ! ${computerChoice} beats ${userChoice}`;
            computerNumber += 1;
            computerScore.innerText = computerNumber;
        }
        else if (userChoice == "paper" && computerChoice == "rock") {
            result.innerText = `User wins ! ${userChoice} beats ${computerChoice}`;
            userNumber += 1;
            userScore.innerText = userNumber;
        }
        else if (userChoice == "scissors" && computerChoice == "rock") {
            result.innerText = `Computer wins ! ${computerChoice} beats ${userChoice}`;
            computerNumber += 1;
            computerScore.innerText = computerNumber;
        }
        else if (userChoice == "scissors" && computerChoice == "paper") {
            result.innerText = `User wins ! ${userChoice} beats ${computerChoice}`;
            userNumber += 1;
            userScore.innerText = userNumber;
        }
    }
};

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        checkWin(event.target.value);
    })
});