function getComputerChoice(){
    let answers=["rock","paper","scissors"];
    return  answers[Math.floor(Math.random() * answers.length)];
}

function getPlayerChoice(){
     return prompt("enter your answer").toLowerCase();
}
function verifyPlayerInput(answer){
    if(answer === "rock" || answer ==="paper" || answer ==="scissors"){
        return true;
    }else{
        return false;
    }
}

function playRound(){
    let playerChoice=getPlayerChoice();
    if(verifyPlayerInput(playerChoice)==false){
        return "invalid input";
    }
    let ComputerChoice= getComputerChoice();

    if (playerChoice == "rock" && ComputerChoice =="scissors"){
        return "user";
    }else if(playerChoice =="paper" && ComputerChoice == "rock"){
        return "user";
    }else if(playerChoice =="scissors" && ComputerChoice=="paper"){
        return "user";
    }else if(playerChoice =="scissors" && ComputerChoice=="rock"){
        return "computer";

    }else if(playerChoice=="rock" && ComputerChoice=="paper"){
        return "computer";
    }else if(playerChoice =="papper" && ComputerChoice=="scissors"){
        return "computer";
    }else{
        return "draw";
    }
}

function playgame(){
    let playerScore=0;
    let computerScore=0;

    for(let i=0 ;i<5;i++){
        let value =playRound();
        if(value == "user"){
            playerScore ++;
            console.log(`you win! you score is ${playerScore} and computer score ${computerScore}`);
        }else if(value == "computer"){
            computerScore ++;
            console.log(`you lose! your score is ${playerScore} and computer ${computerScore} `);
        }else if(value=="draw"){
            console.log(`draw  your score is ${playerScore} and computer ${computerScore}`);
        }else{
            console.log("invalid input");
            i=i-1;
        }
    }
    if(computerScore < playerScore){
        console.log(`you win ${playerScore} : ${computerScore}`);
    }else if(computerScore > playerScore){
        console.log(`you lose ${playerScore} : ${computerScore}`);
    }else{
        console.log(`draw ${playerScore} : ${computerScore}`);
    }
}



