let humanScore=0;
let computerScore=0;
let gameCount=0;

function getComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3)+1;
    let computerChoice="";
    if(randomNumber===1){
        computerChoice+="Rock";
    }
    else if(randomNumber===2){
        computerChoice+="Paper";
    }
    else{
        computerChoice+="Scissor";
    }
    console.log("Computer chooses:"+computerChoice);
    return computerChoice;
}

function getHumanChoice(){
    let userInput=prompt("Enter your choice (Rock, Paper, Scissor)");
    let isValid=true;
    let counter=0;
    while(isValid){
        if(!("ROCK"===userInput.toUpperCase()
            ||"PAPER"===userInput.toUpperCase()
            ||"SCISSOR"===userInput.toUpperCase())){
                userInput=prompt("Invalid Choice. Please try again");
                if(counter>10){
                    alert("Player's choice will be randomized");
                    userInput=getComputerChoice();
                    isValid=false;
                }
            }
        else{
            isValid=false;
        }
        counter++;
    }
    console.log("Player chooses:"+userInput);
    return userInput;
}