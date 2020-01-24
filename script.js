
const Player = (name, playerMove, isHuman) => {

    let playerScore = 0;
    const resetScore = () => {
        playerScore = 0;
    }
    const incrementScore = () => {
        playerScore++;
        return playerScore;
    }
    const playerInfo = () => console.log(`Name: ${name}, PlayerNum: ${playerMove}, Human: ${isHuman}`);
    const moveAI = (thisBoard) => {
<<<<<<< HEAD
        if (isHuman === false) {
            openSpaces = [];
            for (let i = 0; i < thisBoard.lenth; i++) {
                if (thisBoard.value === "") {

                }
            }

=======
        debugger;
        if (isHuman === false) {
            let spaceFound = false;
            let move;
            while (spaceFound == false) {
                move = Math.floor(Math.random() * Math.floor(8));
                if (thisBoard[move].value === "") {
                    spaceFound = true;
                }
            }
            return move;
>>>>>>> master
        }
        else return
    }
    return { name, playerMove, incrementScore, isHuman, playerInfo, playerScore, resetScore, moveAI };
};
const Space = (value, location) => {
    let spaceInfo = console.log("space value" + value + "location " + location);
    let clicked = (player) => {
        if (player === player1) {

            value = player1.playerMove;
            location.innerHTML = value;
        }
        if (player === player2) {
            value = player2.playerMove;
            location.innerHTML = value;
        }
    }
    return { value, location, clicked, spaceInfo }
}

//get the player info
let player1;
let player2;
document.getElementById("play-game").addEventListener("click", () => {
    let player1Name = document.getElementById("player1-input").value;
    let player2Name = document.getElementById("player2-input").value;
    if (document.getElementsByName("number-players")[0].checked) {
        player1 = Player(player1Name, "X", true);
        player2 = Player(player2Name, "0", true);

    }
    else {
        player1 = Player(player1Name, "X", true);
        player2 = Player(player2Name, "0", false);
    }
    //gives default name values if no name entered
    document.getElementById("player1-score").innerHTML = player1.playerScore;
    document.getElementById("player2-score").innerHTML = player2.playerScore;
    if (player1.name == "") {
        player1.name = "Player 1";
    }
    if (player2.name == "") {

        player2.name = "Player 2";
    }
    //appends the names to the score area
    document.getElementById("player1-name").innerHTML = player1.name;
    document.getElementById("player2-name").innerHTML = player2.name;

    playGame();
})



const playGame = function () {

    //shows play game content in box and hides the game set up
    document.getElementById("add-player-info").style.display = "none";
    document.getElementById("game-on").style.display = "inline";
    document.getElementById("player-info-form").style.display = "none";
    document.getElementById("game-info").style.display = "grid";

    let tieCount = 0;
    let isGameOver = false;

    startRound();




    for (let i = 0; i < thisBoard.length; i++) {

        thisBoard[i].location.addEventListener("click", () => {
            if (isGameOver) {
                return
            }
            if (thisBoard[i].location.innerHTML !== "") return;
            else if (player1Move === true) {
                thisBoard[i].clicked(player1);
                console.log("board space value  " + thisBoard[i].value)
                thisBoard[i].value = "X";
                player1Move = false;

                document.getElementById("player2-name").classList.add("active-player");
                document.getElementById("player1-name").classList.remove("active-player");
                gameOver();

                if (player2.isHuman === false && player1Move === false && isGameOver === false) {
                    let player2move = player2.moveAI(thisBoard);
                    thisBoard[player2move].clicked(player2);
                    thisBoard[player2move].value = "O";

                    player1Move = true;
                    document.getElementById("player1-name").classList.add("active-player");
                    document.getElementById("player2-name").classList.remove("active-player");
                    gameOver();
                }
            }

            // player 2 move if player2 is human
            else if (player1Move === false && player2.isHuman === true) {

                thisBoard[i].clicked(player2);
                thisBoard[i].value = "O";
                player1Move = true;
                document.getElementById("player1-name").classList.add("active-player");
                document.getElementById("player2-name").classList.remove("active-player");
                gameOver();
            } else return;


        })
    }


    let scoreResetButton = document.getElementById("score-reset");
    scoreResetButton.addEventListener("click", () => {
        //this doesn't properly reset the score;
        player1.resetScore();
        player2.resetScore();
        tieCount = 0;
        document.getElementById("player1-score").innerHTML = player1.playerScore;
        document.getElementById("player2-score").innerHTML = player2.playerScore;
        document.getElementById("tie-count").innerHTML = tieCount;

        startRound()

    });
    let resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", () => {
        startRound()

    });

    let newGamebutton = document.getElementById("new-game");
    newGamebutton.addEventListener("click", () => {
        document.getElementById("add-player-info").style.display = "inline";
        document.getElementById("game-on").style.display = "none";
        document.getElementById("player-info-form").style.display = "inline-block";
        document.getElementById("game-info").style.display = "none";

        //remove event listener for board so user can't keep playing
        isGameOver = true;

    });


    //support function to start a new round
    function startRound() {
        thisBoard = createBlankBoard();
        player1Move = true;
        isGameOver = false;
        document.getElementById("player1-name").classList.add("active-player");
        document.getElementById("player2-name").classList.remove("active-player");
    }

    //support function to check if game over
    function gameOver() {

        if (winnerCheck(thisBoard[0], thisBoard[1], thisBoard[2]) == true) {
            isGameOver = true;
            return
        } else if (winnerCheck(thisBoard[0], thisBoard[3], thisBoard[6]) == true) {
            isGameOver = true;
            return;
        } else if (winnerCheck(thisBoard[0], thisBoard[4], thisBoard[8]) == true) {
            isGameOver = true;
            return;
        } else if (winnerCheck(thisBoard[1], thisBoard[4], thisBoard[7]) == true) {
            isGameOver = true;
            return
        } else if (winnerCheck(thisBoard[2], thisBoard[5], thisBoard[8]) == true) {
            isGameOver = true;
            return;
        } else if (winnerCheck(thisBoard[2], thisBoard[4], thisBoard[6]) == true) {
            isGameOver = true;
            return;
        } else if (winnerCheck(thisBoard[3], thisBoard[4], thisBoard[5]) == true) {
            isGameOver = true;
            return;
        } else if (winnerCheck(thisBoard[6], thisBoard[7], thisBoard[8]) == true) {
            isGameOver = true;
            return;
        } else if (isFull(thisBoard) == true) {
            tieCount++;
            document.getElementById("tie-count").innerHTML = tieCount;
        }
    }
    //checks if board is full
    function isFull(board) {

        let boardVals = [];
        for (let i = 0; i < board.length; i++) {
            boardVals[i] = thisBoard[i].value;
        }
        if (boardVals.includes("")) return false;
        else return true;
    }

    //support function looking for 3 of same in a row and changing background color when achieved
    function winnerCheck(first, second, third) {

        let firstVal = first.value;
        let secondVal = second.value;
        let thirdVal = third.value;

        if (firstVal === secondVal && firstVal === thirdVal && (firstVal == "X" || firstVal == "O")) {
            if (firstVal == "X") {
                first.location.style.backgroundColor = "#404040";
                first.location.style.color = "whitesmoke";
                second.location.style.backgroundColor = "#404040";
                second.location.style.color = "whitesmoke";
                third.location.style.backgroundColor = "#404040";
                third.location.style.color = "whitesmoke";
                document.getElementById("player1-score").innerHTML = player1.incrementScore();

            }

            if (firstVal == "O") {
                first.location.style.backgroundColor = "#404040";
                first.location.style.color = "whitesmoke";
                second.location.style.backgroundColor = "#404040";
                second.location.style.color = "whitesmoke";
                third.location.style.backgroundColor = "#404040";
                third.location.style.color = "whitesmoke";
                document.getElementById("player2-score").innerHTML = player2.incrementScore();
            }
            return true;
        }
        else return false;
    }
};


//make a blank board
const createBlankBoard = () => {
    let board = [];

    for (let i = 0; i < 9; i++) {
        let spaceId = "space" + parseInt(1 + i);
        let spaceLocation = document.getElementById(spaceId);
        board[i] = Space("", spaceLocation);
        board[i].location.innerHTML = "";
        board[i].location.style.backgroundColor = "";
        board[i].location.style.color = "#404040"

    }
    return board;
}




