//define array for choices [r, p, s]
var choice = ["R", "P", "S"];
var wins = 0;
var ties = 0;
var losses = 0;

//define var for computerChoice
//define var for playerChoice

var playerChoice = prompt("Enter your choice: R/P/S ");
var random = Math.floor(Math.random() * choice.length)
var computerChoice = choice[random];
var keepPlaying = true
//Win Conditions

if
 (playerChoice===computerChoice){
    window.alert("It's a tie!")
    ties++
    result = "Tied"
} if (
    (playerChoice === "R" && computerChoice === "S")||
    (playerChoice === "S" && computerChoice === "P")||
    (playerChoice === "P" && computerChoice === "R")
)}
else if {
    window.alert("A winner is you!")
    wins++
    result = "Win!"
} else {
    window.alert("You are a loser!")
    losses++
    result = "Lost!"
}


//Show stats
alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
