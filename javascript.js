//Step 1
//General goal: Create a function that will return the computer's choice between rock, paper, or scissors
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




//Step 2
//General Goal: Create a function that will return the user's choice between rock, paper, or scissors
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





//Step 3
//General goal: Play a round of rock paper scissors using the results from step 1 and step 2.
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






//Step 4
//General goal: create a function that repeats step three until either the computer or player achieves 5 wins
//To do so, I have to create a counter that adds to itself every time someone wins
//Parameters: none
//Return: gameWinner
//Specifics:
//1. Create a for loop that runs five times.
    //1. If playRound = tie, then add 0 to both counters
    //2. If playRound = computer win, add 1 to computer counter
    //3. If playRound = player win, add 1 to player counter
//2. Compare player and computer counter
    //1.If player > computer, return player wins game
    //2. If player < computer, return computer wins game

// function gameResult(){
//     let playerCounter = 0;
//     let computerCounter = 0;

//     while(playerCounter != 5 && computerCounter != 5){
//         let result = playRound(getPlayerChoice(), getComputerChoice());
//         console.log(result);
//         if (result == "It's a tie"){
//             playerCounter = playerCounter + 0;
//             computerCounter = computerCounter + 0;
//         } else if (result == "You won"){
//             ++playerCounter;
//         } else{
//             ++computerCounter;
//         }
//     }

//     if (playerCounter > computerCounter){
//         console.log(`The result is ${playerCounter}-${computerCounter}. You have won the game!`)
//     } else{
//         console.log(`The result is ${playerCounter}-${computerCounter}. The computer has beat you!`)
//     }
    

    
// }

// gameResult();

//Step 2: create three buttons, one for each selection. Add an event listener
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
    if(result=="You won"){
        console.log("You won");
    } else{
        console.log("You lost")
    }

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
    
    playRound(playerChoice, getComputerChoice());

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
    
    playRound(playerChoice, getComputerChoice());

    

});

//Add a div for displaying results and change all of your console.logs into DOM 
//methods

const roundOutcomeDiv = document.createElement("div")
roundOutcomeDiv.classList.add("roundOutcomeDiv")
body.appendChild(roundOutcomeDiv);

const computerChoiceDiv = document.createElement("div")
computerChoiceDiv.classList.add("computerChoiceDiv")
body.appendChild(computerChoiceDiv);

const playerChoiceDiv = document.createElement("div")
playerChoiceDiv.classList.add("playerChoiceDiv")
body.appendChild(playerChoiceDiv);

const counterDiv = document.createElement("div")
counterDiv.classList.add("counterDiv")
body.appendChild(counterDiv);