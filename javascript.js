//Step 1
//General goal: Create a function that will return the computer's choice between rock, paper, or scissors
//Parameters: none
//Return computerSelection
//Specifics:
//1. Return a value that's 1,2, or 3. 
//2. If it's a one, return "rock"
//3. If it's a two, return "paper"
//4. If it's a three, return "scissors"



//Step 2
//General Goal: Create a function that will return the user's choice between rock, paper, or scissors
//Parameters: none
//Return playerSelection
//Specifics:
//1. Prompt the user for a choice between the three
//2. Convert the user's input all to lowercase, so that capitalization is consistent across all inputs
//3. If user fails to return any of the three options, prompt the user to return a correct answer
//4. Return the user's input

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

//Step 4
//General goal: create a function that repeats step three until either the computer or player achieves 5 wins
//To do so, I have to create a counter that adds to itself every time someone wins
//Parameters: none
//Return: gameWinner
//Specifics:
//1. while winCounterPlayer or winCounterComputer has not reached five
    //1. if function from step 3 returns "player win" add one to winCounterPlayer
    //2. if function from step 3 returns "computer win" add one to winCounterComputer
    //3. else, add 0 to both winCounterPlayer and winCounterComputer
//2. if winCounterPlayer === 5, then return "Player Wins Game" || if winCounterComputer ===, then return "Computer Wins Game"
