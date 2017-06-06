$(document).ready(function() {
    $("#game-area").hide();
    loadConfiguration();
    loadTicTacToe();
    startGame();
})

function loadConfiguration() {

    document.getElementById("start-button").onclick = function() {
        setConfiguration();
    };
}

var tictactoe = Array(3);
tictactoe[0] = Array(3);
tictactoe[1] = Array(3);
tictactoe[2] = Array(3);

function loadTicTacToe() {
    for (var countA = 0; countA < 3; countA++) {
        for (var countB = 0; countB < 3; countB++) {
            tictactoe[countA][countB] = "";
            tictactoe[countB][countA] = "";
        }
    }
}

function setConfiguration() {
    var errorMessage = ""
    var player1Name = $("#input-player-1-name").val();
    var player2Name = $("#input-player-2-name").val();

    if (player1Name == "") {
        errorMessage = "O apelido do Jogador 1 não foi informado ";
    }
    if (player2Name == "") {
        if (errorMessage != "") {
            errorMessage = errorMessage + "\nO apelido do Jogador 2 não foi informado";
        } else {
            errorMessage = "O apelido do Jogador 2 não foi informado";
        }
    }

    if (errorMessage != "") {
        alert(errorMessage);

    } else {

        $("#configuration").hide();
        $("#game-area").show();

        $("#player-1-name").html(player1Name);
        $("#player-2-name").html(player2Name);
    }
}

var finished = false;

function startGame() {
    var move = 0;

    $(".game-field").click(function() {
        var className = document.getElementById(this.id).getAttribute("class");

        if (className.indexOf("player") == -1 && !finished) {

            var fieldId = this.id.split("-");
            var row = fieldId[0];
            var col = fieldId[1];

            if ((move % 2) == 0) {
                $("#" + this.id).addClass("player-1");
                setTicTacToe(row, col, "player1");

            } else {
                $("#" + this.id).addClass("player-2");
                setTicTacToe(row, col, "player2");
            }

            move++;

            if (move == 9) {
                setTimeout(function() {
                    alert("Deu Velha!");
                }, 500);

                finished = true;
            }
        }
    })
}


function setTicTacToe(row, col, playerName) {
    tictactoe[row][col] = playerName

    var player1LDiag = 0;
    var player2LDiag = 0
    var player1RDiag = 0;
    var player2RDiag = 0

    for (var countA = 0; countA < 3; countA++) {
        var player1Row = 0;
        var player2Row = 0;
        var player1Col = 0;
        var player2Col = 0;

        for (var countB = 0; countB < 3; countB++) {
            if (tictactoe[countA][countB].indexOf("player1") > -1) {
                player1Row++;
            }

            if (tictactoe[countA][countB].indexOf("player2") > -1) {
                player2Row++;
            }

            if (tictactoe[countB][countA].indexOf("player1") > -1) {
                player1Col++;
            }

            if (tictactoe[countB][countA].indexOf("player2") > -1) {
                player2Col++;
            }

            if (countA == countB) {
                if (tictactoe[countA][countB].indexOf("player1") > -1) {
                    player1LDiag++;
                }

                if (tictactoe[countA][countB].indexOf("player2") > -1) {
                    player2LDiag++;
                }
            }

            if (countA + countB == 2) {
                if (tictactoe[countA][countB].indexOf("player1") > -1) {
                    player1RDiag++;
                }

                if (tictactoe[countA][countB].indexOf("player2") > -1) {
                    player2RDiag++;
                }
            }
        }

        checkWinner();
    }

    function checkWinner() {

        if (player1Row == 3 || player1Col == 3 || player1LDiag == 3 || player1RDiag == 3) {
            setTimeout(function() {
                alert($("#player-1-name").text() + " Ganhou!");
            }, 100);

            finished = true;
        }

        if (player2Row == 3 || player2Col == 3 || player2LDiag == 3 || player2RDiag == 3) {
            setTimeout(function() {
                alert($("#player-2-name").text() + " Ganhou!");
            }, 100);

            finished = true;
        }
    }
}