function game()
{
    let count=0;
    for(let i=0 ; i<5 ;i++){
        let x = play( getPlayerChoice() , getComputerChoice())
        if(x){
            count++;
        }
        
    }
    if (count>2){
        console.log("you win !  " )
        console.log("Score = " + count + " / 5 ");
    }
    else{
        console.log("you lose !  " )
        console.log("Score = " + count + " / 5 ");
    }
}
function getComputerChoice(){
    switch(Math.floor((Math.random()*10)%3)){
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
    }
}
function getPlayerChoice(){
    let choice = window.prompt("CHOOSE ROCK PAPER SCISSORS");
    return choice.toUpperCase();
}
function play(player1 , player2){
        if( player1 == player2){
            console.log("Thats a draw " + player1 + " & " + player2);
            return (play( getPlayerChoice() , getComputerChoice()));
        }
        else if(player1 == "ROCK"){
            switch(player2){
                case "PAPER":
                    console.log("You lose! Paper Covers Rock");
                    return 0;
                    break;
                case "SCISSORS":
                    console.log("You Win! Rock crushes scissors");
                    return 1;
                    break;
                default :
                    console.log(" unidentified choice ! please try again");
                    return -1;
                     
            }
        }
        else if(player1 == "PAPER"){
            switch(player2){
                case "ROCK":
                    console.log("You Win! Paper Covers Rock");
                    return 1;
                    break;
                case "SCISSORS":
                    console.log("You lose! Scissors cut paper ");
                    return 0;
                    break;
                default :
                    console.log(" unidentified choice ! please try again");
                    return -1;
            }
        
        }
        else if(player1 == "SCISSORS"){
            switch(player2){
                case "ROCK":
                    console.log("You lose! Rock Crushes Scissors");
                    return 0;
                    break;
                case "PAPER":
                    console.log("You win! Scissors cut paper ");
                    return 1;
                    break;
                default :
                    console.log(" unidentified choice ! please try again");
                    return -1;
                    
            }
        
        }
}