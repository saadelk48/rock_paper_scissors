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

    
    let round={};
    if (playerChoice == "rock" && ComputerChoice =="scissors"){
        round["winner"]="user";
        round["winnerWeapon"]="rock";
        round["loserWeapon"]="scissors";
    }else if(playerChoice =="paper" && ComputerChoice == "rock"){
        round["winner"]="user";
        round["winnerWeapon"]="paper";
        round["loserWeapon"]="rock";
    }else if(playerChoice =="scissors" && ComputerChoice=="paper"){
        round["winner"]="user";
        round["winnerWeapon"]="scissors";
        round["loserWeapon"]="paper";
    }else if(playerChoice =="scissors" && ComputerChoice=="rock"){
        round["winner"]="computer";
        round["winnerWeapon"]="rock";
        round["loserWeapon"]="scissors";

    }else if(playerChoice=="rock" && ComputerChoice=="paper"){
        round["winner"]="computer";
        round["winnerWeapon"]="paper";
        round["loserWeapon"]="rock";
    }else if(playerChoice =="paper" && ComputerChoice=="scissors"){
        round["winner"]="computer";
        round["winnerWeapon"]="scissors";
        round["loserWeapon"]="paper";
    }else{
        round["winner"]="both";
    }
    return round;
}

function playGame(){
    let playerScore=0;
    let computerScore=0;

    for(let i=0 ;i<5;i++){
        let value=playRound();
        if(value["winner"] == "user"){
            playerScore ++;
          
        }else if(value["winner"] == "computer"){
            computerScore ++;     
        }
        (value["winner"] != "both") ? console.log(`winner is ${value["winner"]} , ${value["winnerWeapon"]} beats ${value["loserWeapon"]}`) : console.log(`its a tie`)
    }
    if(computerScore < playerScore){
        console.log(`you win ${playerScore} : ${computerScore}`);
    }else if(computerScore > playerScore){
        console.log(`you lose ${playerScore} : ${computerScore}`);
    }else{
        console.log(`draw ${playerScore} : ${computerScore}`);
    }
}



