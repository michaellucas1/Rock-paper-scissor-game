let humanScore=0;
let computerScore=0;
let gameCount=1;

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
    return computerChoice;
}
function decideWinner(){
    let winner = document.createElement("div");
    if(humanScore>computerScore){
        winner.textContent="The winner is the Player!";
    }
    else if(computerScore>humanScore){
        winner.textContent="The winner is the Computer!";
    }
    else{
        winner.textContent="It's a tie!";
    }
    return winner;
}
function displayPlayerChoice(humanChoice,computerChoice){
    let playerChoice = document.createTextNode(`Player: ${humanChoice} vs Computer: ${computerChoice}`);
    let displayContainer= document.createElement("div");
    displayContainer.appendChild(playerChoice);
    return displayContainer;
}
function displayCurrentScore(){
    let scoreDisplay=document.createTextNode(`Player Score: ${humanScore} Computer Score: ${computerScore}`);
    return scoreDisplay;
}
function displayCurrentRound(){
    let currentRound=document.createTextNode(`Round ${gameCount}`);
    return currentRound;
}
function playRound(){
    let gameResult = document.querySelector(".game-result");
    let scoreContainer=document.createElement("div");
    gameResult.textContent="";
    if(gameCount>=5){
        gameResult.appendChild(displayCurrentRound());
        gameResult.appendChild(decideWinner());
        gameResult.appendChild(displayCurrentScore());
        this.removeEventListener('click',playRound);
    }
    else{
        let humanChoice= this.textContent;
        let computerChoice = getComputerChoice();
        let currentResult;
        
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
            computerScore++;
        }
        gameResult.appendChild(displayCurrentRound());
        scoreContainer.appendChild(displayCurrentScore());
        gameResult.appendChild(scoreContainer);
        gameResult.appendChild(displayPlayerChoice(this.textContent,computerChoice));
        gameResult.appendChild(currentResult);
        gameCount++;

    }
    

}

//alert(`Round ${gameCount+1} result : ${result} \nPlayer score : ${humanScore} \nComputer score : ${computerScore}`)

const rock= document.querySelector('.rock');
const paper= document.querySelector('.paper');
const scissor= document.querySelector('.scissor');
rock.addEventListener('click',playRound);
paper.addEventListener('click',playRound);
scissor.addEventListener('click',playRound);

