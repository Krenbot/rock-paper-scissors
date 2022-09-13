//define array for choices [r, p, s]
var choice = ["R", "P", "S"];

//define var for wins
//define var for losses
//define var for ties
var wins = 0;
var ties = 0;
var losses = 0;

//define var for computerChoice
//define var for playerChoice

var playerChoice = prompt("Enter your choice: R/P/S ");

var random = Math.floor(Math.random() * choice.length)
var computerChoice = choice[random];

//Win Conditions
if (playerChoice===computerChoice){
    window.alert("It's a tie!")
} 
if (
    (playerChoice === "R" && computerChoice === "S")||
    (playerChoice === "S" && computerChoice === "P")||
    (playerChoice === "P" && computerChoice === "R")
){
    window.alert("A winner is you!")
} else {
    window.alert("You are a loser!")
}


//display (alert) results (win/tie/lose round)

//show stats (number of wins/losses/ties)

//play again? y/n
    //restart game
    //else, 
    //cancel game