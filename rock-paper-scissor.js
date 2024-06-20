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