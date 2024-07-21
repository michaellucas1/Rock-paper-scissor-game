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

function playRound(){
    let roundResult="";
    let humanChoice= this.textContent;
    let computerChoice = getComputerChoice();
    humanChoice=humanChoice.toUpperCase();
    if("PAPER"===humanChoice&&computerChoice==="Paper"
        ||"ROCK"===humanChoice&&computerChoice==="Rock"
        ||"SCISSOR"===humanChoice&&computerChoice==="Scissor"){
            console.log("It's a draw");
            roundResult="It's a draw";
    }
    else if("PAPER"===humanChoice&&computerChoice==="Rock"
        ||"ROCK"===humanChoice&&computerChoice==="Scissor"
        ||"SCISSOR"===humanChoice&&computerChoice==="Paper"){
            console.log("Player wins!");
            roundResult="Player wins!";
            humanScore++;
            
    }
    else{
        console.log("Computer wins!");
        computerScore++;
        roundResult="Computer wins!";
    }

}

//alert(`Round ${gameCount+1} result : ${result} \nPlayer score : ${humanScore} \nComputer score : ${computerScore}`)

const rock= document.querySelector('.rock');
const paper= document.querySelector('.paper');
const scissor= document.querySelector('.scissor');
rock.addEventListener('click',playRound);
paper.addEventListener('click',playRound);
scissor.addEventListener('click',playRound);

