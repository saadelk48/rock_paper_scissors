function getComputerChoice(){
    let answers=["rock","paper","scissors"];
    return  answers[Math.floor(Math.random() * answers.length)];
}

let computerScore=0;
let playerScore=0;
let roundCount=0;

let playerWeapon=document.getElementById("player_weapon");
let computerWeapon=document.getElementById("computer_weapon");

let playerScorePlacement=document.getElementById("player_score");
let computerScorePlacement=document.getElementById("computer_score");

let message=document.querySelector("#game_info h2");
console.log(message);

let explain=document.querySelector("#game_info h3");
console.log(explain);





function playRound(playerChoice){

    if(roundCount<5){
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
            if(playerChoice=="rock"){
                round["winnerWeapon"]="rock";
                round["loserWeapon"]="rock";  
            }else if(playerChoice=="paper"){
                round["winnerWeapon"]="paper";
                round["loserWeapon"]="paper";
            }else if(playerChoice=="scissors"){
                round["winnerWeapon"]="scissors";
                round["loserWeapon"]="scissors"; 
            }
        }
        console.log(round);

        

        if(round["winner"]=="computer"){
                computerScore++;
        }else if(round["winner"]=="user"){
                playerScore++;
        }
        playerScorePlacement.textContent=`${playerScore}`;
        computerScorePlacement.textContent=`${computerScore}`;
        roundCount++;
       

        if(round["winner"]=="user"){
            message.textContent=`${"you won"}`;
            explain.textContent=`${round["winnerWeapon"] +" beats "+round["loserWeapon"]}`;

            if((round["winnerWeapon"]=="rock")&&(round["loserWeapon"]=="scissors")){
                playerWeapon.textContent="✊";
                computerWeapon.textContent="✌";
            }else if((round["winnerWeapon"]=="paper")&& (round["loserWeapon"]=="rock")){
                playerWeapon.textContent="✋";
                computerWeapon.textContent="✊";
            }else if((round["winnerWeapon"]=="scissors")&&(round["loserWeapon"]=="paper")){
                playerWeapon.textContent="✌";
                computerWeapon.textContent="✋";
            }
   
        }else if(round["winner"]=="computer"){
            message.textContent=`${"you lost"}`;
            explain.textContent=`${round["winnerWeapon"] +" beats "+round["loserWeapon"]}`;

            if((round["winnerWeapon"]=="rock")&&(round["loserWeapon"]=="scissors")){
                playerWeapon.textContent="✌";
                computerWeapon.textContent="✊";
            }else if((round["winnerWeapon"]=="paper")&& (round["loserWeapon"]=="rock")){
                playerWeapon.textContent="✊";
                computerWeapon.textContent="✋";
            }else if((round["winnerWeapon"]=="scissors")&&(round["loserWeapon"]=="paper")){
                playerWeapon.textContent="✋";
                computerWeapon.textContent="✌";
            }

        }else if(round["winner"]=="both"){
        message.textContent=`${"its a tie"}`;
        explain.textContent=`${round["winnerWeapon"] + " tie "+ round["loserWeapon"]}`;

        if((round["winnerWeapon"]=="rock")&&(round["loserWeapon"]=="rock")){
            playerWeapon.textContent="✊";
            computerWeapon.textContent="✊";
        }else if((round["winnerWeapon"]=="paper")&& (round["loserWeapon"]=="paper")){
            playerWeapon.textContent="✋";
            computerWeapon.textContent="✋";
        }else if((round["winnerWeapon"]=="scissors")&&(round["loserWeapon"]=="paper")){
            playerWeapon.textContent="✌";
            computerWeapon.textContent="✌";
        }

        }

        
            if (roundCount == 5) {
                // Use setTimeout to delay the alert after loading the last round
                setTimeout(function() {
                    if (computerScore > playerScore) {
                        alert("You lose");
                    } else {
                        alert("You win");
                    }
                }, 500); // Adjust the delay time as needed
            }
    }else{
        if(computerScore>playerScore){
            alert("you lose");
        }else{
            alert("you win");
        }
    } 
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



