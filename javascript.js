//General: Create a function that will return the computer's choice between rock, paper, or scissors
//Parameters: none
//Return the computer's choice
//Specifics:
//1. Return a value that's 0,1, or 2. 
//2. If it's a zero, return "rock"
//3. If it's a one, return "paper"
//4. If it's a two, return "scissors"

function getComputerChoice(){
   let computerChoice = Math.floor(Math.random() * 3);
   if (computerChoice === 0){
    computerChoiceDiv.textContent = "Computer chose rock";
    return "rock";
   } else if (computerChoice === 1){
    computerChoiceDiv.textContent = "Computer chose paper";
    return "paper";
   } else {
    computerChoiceDiv.textContent = "Computer chose scissors";
    return "scissors";
   }
   
}

//General: Create a function that will return the user's choice between rock, paper, or scissors
//Parameters: none
//Return player's choice
//Specifics:
//1. Prompt the user for a choice between the three
//2. Convert the user's input all to lowercase, so that capitalization is consistent across all inputs
//3. If user fails to return any of the three options, prompt the user to return a correct answer
//4. Return the user's input

function getPlayerChoice(){

    let playerChoice = prompt("Please enter rock, paper, or scissors");
    playerChoice = playerChoice.toLowerCase();
    while (playerChoice!="rock" && playerChoice!="paper" && playerChoice!="scissors"){
        playerChoice = prompt("You can only enter rock, paper, or scissors");
        playerChoice = playerChoice.toLowerCase();
    }
    console.log(`You chose ${playerChoice}`);
    return playerChoice;

}

//General: Play a round of rock paper scissors using the results from step 1 and step 2.
//To do so, I have to create all possiblities of a game of rock paper scissors
//Parameters: computerSelection, playerSelection
//Return: roundWinner
//Specifics:
//1. if player chooses rock and computer chooses rock, return "tie"
//2. if player chooses rock and computer choose paper, return "computer win"
//3. if player chooses rock and computer chooses scissor, return "player win"
//4. if player chooses paper and computer chooses paper, return "tie"
//5. if player chooses paper and computer chooses scissors, return "computer win"
//6. if player chooses paper and computer chooses rock, return. "player win"
//7. if player chooses scissors and computer chooses scissors, return "tie"
//8. if player chooses scissors and computer chooses rock, return "computer win"
//9 if player chooses scissors and computer chooses paper, return, "player win"

function playRound(player, computer){
   
    if(player == "rock" && computer == "rock"){
        roundOutcomeDiv.textContent = "It's a tie";
        return "It's a tie";
    } else if(player == "rock" && computer == "paper"){
        roundOutcomeDiv.textContent = "The computer won";
        return"The computer won";
    } else if(player == "rock" && computer == "scissors"){
        roundOutcomeDiv.textContent = "You won";
        return"You won";
    } else if(player == "paper" && computer == "paper"){
        roundOutcomeDiv.textContent = "It's a tie";
        return"It's a tie";
    } else if(player == "paper" && computer == "scissors"){
        roundOutcomeDiv.textContent = "The computer won";
        return"The computer won";
    } else if(player == "paper" && computer == "rock"){
        roundOutcomeDiv.textContent = "You won";
        return"You won";
    } else if(player == "scissors" && computer == "scissors"){
        roundOutcomeDiv.textContent = "It's a tie";
        return"It's a tie";
    } else if(player == "scissors" && computer == "rock"){
        roundOutcomeDiv.textContent = "The computer won";
        return"The computer won";
    } else if(player == "scissors" && computer == "paper"){
        roundOutcomeDiv.textContent = "You won";
        return"You won";
    }
}

//General: this function will keep track of how many rounds the computer
//or the player has won. Once someone hits five points, disable the buttons
//and ask the user to refresh.
//parameters: the result of who won
//specific:
//1. if computer wins, add one to the computerCounter
//2. if player wins, add one to the playerCounter


let computerCounter = 0;
let playerCounter = 0;

function roundCounter(roundResult){


    //if user wins and neither counter is equal to five add one to player counter
    if(roundResult == "You won" && (computerCounter != 5 && playerCounter !=5)){
        ++playerCounter;
        counterDiv.textContent = `${playerCounter}-${computerCounter}`;
    }else if(roundResult == "The computer won" && (computerCounter != 5 && playerCounter !=5)){
        ++computerCounter;
        counterDiv.textContent = `${playerCounter}-${computerCounter}`;
    }else if(roundResult == "It's a tie" && (computerCounter != 5 && playerCounter !=5)){
        playerCounter += 0;
        computerCounter += 0;
        counterDiv.textContent = `${playerCounter}-${computerCounter}`;
    }
       
}

function checkCounter(){

    if(computerCounter == 5 || playerCounter == 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        refreshDiv.textContent = "Please refresh the page to keep playing";
        
    }

    

}



//General: create three buttons, one for each selection. Add an event listener
//to the buttons that call your playRound function with the correct
//playerSelection everytime a button is clicked 

//Button one: rock
//pressing this button should log the user's input as rock correctly
//execute the game

const body = document.body;

const rockButton = document.createElement("button");
rockButton.classList.add("rockButton");
rockButton.textContent = "Rock";
body.appendChild(rockButton);

rockButton.addEventListener("click", function(){

    playerChoiceDiv.textContent = "You chose rock";

    let playerChoice = "rock";
    let computerChoice = getComputerChoice();

    
    let result = playRound(playerChoice, getComputerChoice());

    roundCounter(result);
    checkCounter();
    

});

//Button two: paper

const paperButton = document.createElement("button");
paperButton.classList.add("paperButton");
paperButton.textContent = "Paper";
body.appendChild(paperButton);

paperButton.addEventListener("click", function(){

    playerChoiceDiv.textContent = "You chose paper";

    let playerChoice = "paper";
    let computerChoice = getComputerChoice();
    
    let result = playRound(playerChoice, getComputerChoice());

    roundCounter(result);
    checkCounter();

});


//Button three: scissors

const scissorsButton = document.createElement("button");
scissorsButton.classList.add("scissorsButton");
scissorsButton.textContent = "Scissors";
body.appendChild(scissorsButton);

scissorsButton.addEventListener("click", function(){

    playerChoiceDiv.textContent = "You chose scissors";

    let playerChoice = "scissors";
    let computerChoice = getComputerChoice();
    
    let result = playRound(playerChoice, getComputerChoice());

    roundCounter(result);
    checkCounter();
    

});

const roundOutcomeDiv = document.createElement("div");
roundOutcomeDiv.classList.add("roundOutcomeDiv");
body.appendChild(roundOutcomeDiv);

const computerChoiceDiv = document.createElement("div");
computerChoiceDiv.classList.add("computerChoiceDiv");
body.appendChild(computerChoiceDiv);

const playerChoiceDiv = document.createElement("div");
playerChoiceDiv.classList.add("playerChoiceDiv");
body.appendChild(playerChoiceDiv);

const counterDiv = document.createElement("div");
counterDiv.classList.add("counterDiv");
body.appendChild(counterDiv);

const refreshDiv = document.createElement("div");
refreshDiv.classList.add("refreshDiv");
body.appendChild(refreshDiv);