
const boxes = Array.from(document.querySelectorAll(".box"));
const restartBtn = document.querySelector("#restartBtn");
const playerText = document.querySelector("#playerText");
const playerO = "O";
const playerX = "X";

let boardSoFar = ["","","","","","","","",""];
let currentPlayer = playerX;
let running = false;
let gameOver = false;

startGame();

function startGame(){
    running  = true;
    boxes.forEach(box => box.addEventListener("click", boxClicked));
    restartBtn.addEventListener("click",restartGame);
}

function boxClicked(){
    const boxNum = this.getAttribute("boxNum");
    if (boardSoFar[boxNum] == "" && running == true){
        boardSoFar[boxNum] = currentPlayer;
        this.textContent = currentPlayer;
        winCheck();
    }
    else if (boardSoFar[boxNum] != "" || !running){
        return;
    }
    changePlayer();
}

function changePlayer(){
    if (currentPlayer == "X"){
        currentPlayer = playerO;

    }
    else{
        currentPlayer = playerX;

    }
}

function winCheck(){
    //Horizontal
    console.log(boardSoFar);

    for (let i=0; i<=6; i+=3){
        if (boardSoFar[i] == "X" && boardSoFar[i+1] == "X" && boardSoFar[i+2] == "X"){
            gameOver = true;
            playerText.textContent = "X wins!";
        }
        if (boardSoFar[i] == "O" && boardSoFar[i+1] == "O" && boardSoFar[i+2] == "O"){
            gameOver = true;
            playerText.textContent = "O wins!";
        }
    }

    //Vertical
    for (let i=0; i<3; i++){
        if (boardSoFar[i] == "X" && boardSoFar[i+3] == "X" && boardSoFar[i+6] == "X"){
            gameOver = true;
            playerText.textContent = "X wins!";
        }
        if (boardSoFar[i] == "O" && boardSoFar[i+3] == "O" && boardSoFar[i+6] == "O"){
            gameOver = true;
            playerText.textContent = "O wins!";
        }
    }
    //Diagonals
    if (boardSoFar[0] == "X" && boardSoFar[4] == "X" && boardSoFar[8] == "X"){
        gameOver = true;
        console.log("X wins");
        playerText.textContent = "X wins!";
    }
    if (boardSoFar[2] == "X" && boardSoFar[4] == "X" && boardSoFar[7] == "X"){
        gameOver = true;
        console.log("X wins");
        playerText.textContent = "X wins!";
    }

    if (boardSoFar[0] == "O" && boardSoFar[4] == "O" && boardSoFar[8] == "O"){
        gameOver = true;
        console.log("O wins");
        playerText.textContent = "O wins!";
    }
    if (boardSoFar[2] == "O" && boardSoFar[4] == "O" && boardSoFar[6] == "O"){
        gameOver = true;
        console.log("O wins");
        playerText.textContent = "O wins!";
    }
    else if (!boardSoFar.includes("")){
        playerText.textContent = "It's a draw!";
    }
    if (gameOver == true){
        running = false;
    }
    

}

function restartGame(){
    running = true;
    currentPlayer = playerX;
    boardSoFar = ["","","","","","","","",""];
    boxes.forEach(box => box.textContent = "");
    playerText.textContent = "";
    gameOver = false;
}





