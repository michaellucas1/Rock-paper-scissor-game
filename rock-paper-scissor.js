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
function displayPlayerChoice(humanChoice,computerChoice){
    let playerChoice = document.createTextNode(`Player: ${humanChoice} vs Computer: ${computerChoice}`);
    let displayContainer= document.createElement("div");
    displayContainer.appendChild(playerChoice);
    return displayContainer;
}
function playRound(){
    let humanChoice= this.textContent;
    let computerChoice = getComputerChoice();
    
    let currentResult;
    let gameResult = document.querySelector(".game-result");
    gameResult.textContent="";
    
    let scoreContainer=document.createElement("div");
    humanChoice=humanChoice.toUpperCase();
    if("PAPER"===humanChoice&&computerChoice==="Paper"
        ||"ROCK"===humanChoice&&computerChoice==="Rock"
        ||"SCISSOR"===humanChoice&&computerChoice==="Scissor"){
            currentResult = document.createTextNode("It's a draw");
            
    }
    else if("PAPER"===humanChoice&&computerChoice==="Rock"
        ||"ROCK"===humanChoice&&computerChoice==="Scissor"
        ||"SCISSOR"===humanChoice&&computerChoice==="Paper"){
            currentResult = document.createTextNode("Player wins!");

            humanScore++;
            
    }
    else{
        currentResult = document.createTextNode("Computer wins!");
        console.log("Computer wins!");
        computerScore++;
    }
    let scoreDisplay=document.createTextNode(`Player Score: ${humanScore} Computer Score: ${computerScore}`);
    scoreContainer.appendChild(scoreDisplay);
    gameResult.appendChild(scoreContainer);
    gameResult.appendChild(displayPlayerChoice(this.textContent,computerChoice));
    gameResult.appendChild(currentResult);
    gameCount++;

}

//alert(`Round ${gameCount+1} result : ${result} \nPlayer score : ${humanScore} \nComputer score : ${computerScore}`)

const rock= document.querySelector('.rock');
const paper= document.querySelector('.paper');
const scissor= document.querySelector('.scissor');
rock.addEventListener('click',playRound);
paper.addEventListener('click',playRound);
scissor.addEventListener('click',playRound);

