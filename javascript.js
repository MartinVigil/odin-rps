function playRound(){
    let wordList = ["piedra","papel","tijera"]
    let playerSelection = prompt("escriba piedra, papel o tijera: ").toLowerCase();
    let computerSelection = wordList[Math.floor(Math.random() * 3)]

    if(playerSelection == "piedra" && computerSelection == "tijera" ||
       playerSelection == "papel" && computerSelection == "piedra" ||
       playerSelection == "tijera" && computerSelection == "papel"){
        console.log(`${playerSelection} gana contra ${computerSelection}. ganaste`)
        return "player";
    }else if(playerSelection == computerSelection){
        console.log("ambos eligieron " + computerSelection + ". es un empate")
        return "draw";
    }else{
        console.log(`${playerSelection} pierde contra ${computerSelection}. perdiste`)
        return "computer";
    }
}

function playGame(){
    let playerWinner, computerWinner, draw;
    playerWinner = computerWinner = draw = 0;

    for(i = 0; i < 5; i++){
        let winner = playRound();
        if(winner == "player"){
            playerWinner++;
        }else if(winner == "computer"){
            computerWinner++;
        }else{
            draw++;
        }
    }

    if(playerWinner > computerWinner){
        return "ganaste la partida :)";
    }else if(computerWinner > playerWinner){
        return "perdiste la partida :c";
    }else{
        return "empataron la partida :|";
    }
}

console.log(playGame());