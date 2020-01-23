
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
    return { name, playerMove, incrementScore, isHuman, playerInfo, playerScore, resetScore };
};
const Space = (value, location) => {
    let spaceInfo = console.log("space value" + value + "location " + location);
    let isClicked = false;
    let clicked = (player) => {
        if (player === player1) {
            value = player1.playerMove;
            location.innerHTML = value;
            isClicked = true;
        }
        if (player === player2) {
            value = player2.playerMove;
            location.innerHTML = value;
            isClicked = true;
        }
    }
    return { value, location, clicked, isClicked, spaceInfo }
}

//make a board
const Board = () => {

    let myBoard = [];
    for (let i = 0; i < 9; i++) {
        let spaceId = "space" + parseInt(1 + i);
        let spaceLocation = document.getElementById(spaceId);
        myBoard[i] = Space("", spaceLocation);
        console.log(board[i].location)
        myBoard[i].location.innerHTML = "";
        myBoard[i].location.style.backgroundColor = "";
        myBoard[i].location.style.color = "#404040"
    }
    //let boardWon = false;
    // let boardWon = (...spaces) => {
    //     let isBoardWon = false;
    //     if (let i = 0; i < spaces.length; i++) {
    //         if spaces[i].
    //     }
    // }
    return { myBoard };
}



//get the player info
let player1;
let player2;
document.getElementById("play-game").addEventListener("click", () => {
    let player1Name = document.getElementById("player1-input").value;
    let player2Name = document.getElementById("player2-input").value;
    console.log(document.getElementsByName("number-players")[0].checked)
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

    startRound();

    let tieCount = 0;


    for (let i = 0; i < newBoard.length; i++) {

        newBoard[i].location.addEventListener("click", () => {
            if (newBoard[i].location.innerHTML !== "") return;
            else if (player1Move === true) {
                newBoard[i].clicked(player1);
                newBoard[i].value = "X";
                player1Move = false;

                document.getElementById("player2-name").classList.add("active-player");
                document.getElementById("player1-name").classList.remove("active-player");
            }
            else if (player1Move === false) {
                newBoard[i].clicked(player2);
                newBoard[i].value = "O";
                player1Move = true;

                document.getElementById("player1-name").classList.add("active-player");
                document.getElementById("player2-name").classList.remove("active-player");
            }
            gameOver();
        })
    }



    let scoreResetButton = document.getElementById("score-reset");
    scoreResetButton.addEventListener("click", () => {
        //this doesn't properly reset the score;
        debugger;
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


    //support function to start a new round
    function startRound() {
        debugger;
        gameBoard = Board();
        activeBoard = gameBoard.myBoard;
        player1Move = true;
        document.getElementById("player1-name").classList.add("active-player");
        document.getElementById("player2-name").classList.remove("active-player");
    }

    //support function to check if game over
    function gameOver() {

        winnerCheck(newBoard[0], newBoard[1], newBoard[2]);
        winnerCheck(newBoard[0], newBoard[3], newBoard[6]);
        winnerCheck(newBoard[0], newBoard[4], newBoard[8]);
        winnerCheck(newBoard[1], newBoard[4], newBoard[7]);
        winnerCheck(newBoard[2], newBoard[5], newBoard[8]);
        winnerCheck(newBoard[2], newBoard[4], newBoard[6]);
        winnerCheck(newBoard[3], newBoard[4], newBoard[5]);
        winnerCheck(newBoard[6], newBoard[7], newBoard[8]);

        //for when board is full but no winner (tie)
        if (preMoveScore == postMoveScore) {
            {
                tieCount++;
                document.getElementById("tie-count").innerHTML = tieCount;
            }

        }
        //support function looking for 3 of same in a row and changing background color when achieved
        function winnerCheck(first, second, third) {

            let firstVal = first.value;
            let secondVal = second.value;
            let thirdVal = third.value;

            if (firstVal == secondVal && firstVal == thirdVal) {
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
            }
        }
    };

}





