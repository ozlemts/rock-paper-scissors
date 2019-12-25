let victories = 0;
let draws = 0;
let defeats = 0;
let resultText = document.querySelector('.result');
let victoryText = document.querySelector('.victories');
let drawText = document.querySelector('.draws');
let defeatsText = document.querySelector('.defeats');


const performGameLogic = (selectedEl) => {
    document.querySelectorAll(".userchoice").forEach(el => el.classList.remove('chosen'));
    selectedEl.classList.add("chosen");
    let userChoice = selectedEl.getAttribute("data-key");
    findWinner(userChoice, makeComputerChoice());
};


const makeComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3)+1;
    document.querySelector(".computer-choice").src = ("img/" + computerChoice + ".png");
    return (computerChoice);
};


const findWinner = (userChoice, computerChoice ) => {
    makeVisible();
    if (userChoice == 1 && computerChoice == 2 ||
        userChoice == 2 && computerChoice == 3 || 
        userChoice == 3 && computerChoice == 1) {
        resultText.innerText = "You won!";
        resultText.style.color = "green";
        victories = victories + 1;
        victoryText.innerText = victories ;
    } else if (userChoice == computerChoice) {
        resultText.innerText = "Draw!";
        resultText.style.color = "black";
        draws = draws + 1;
        drawText.innerText = draws;
    } else {
        resultText.innerText = "Defeat!";
        resultText.style.color = "red";
        defeats = defeats + 1;
        defeatsText.innerText = + defeats; 
    } 
};


const initializeGame = () => {
    victories = 0;
    draws = 0;
    defeats = 0;
    victoryText.innerText = + victories ;
    drawText.innerText = draws; ;
    defeatsText.innerText = defeats; 
    makeHidden();
}

const makeVisible = () => {
    document.querySelector(".result").style.visibility = "visible";
    document.querySelector(".computer").style.visibility = "visible";
    document.querySelector(".btn").style.visibility = "visible";
    document.querySelector(".score").style.visibility = "visible";
}

const makeHidden = () => {
    document.querySelector(".result").style.visibility = "hidden";
    document.querySelector(".computer").style.visibility = "hidden";
    document.querySelector(".btn").style.visibility = "hidden";
    document.querySelector(".score").style.visibility = "hidden";
}


document.querySelectorAll(".userchoice").forEach(el => el.addEventListener('click', (e) => {
    document.querySelector(".start").addEventListener('click', () => {
        initializeGame(); 
    } )
    performGameLogic(e.target);
}));

