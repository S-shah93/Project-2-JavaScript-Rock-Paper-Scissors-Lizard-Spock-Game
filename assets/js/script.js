/* Entire Game logic inside this Function */
const game = () => {
    let playerScore = 0;
  
    let computerScore = 0;
  
    let moves = 0;

    /* Function to start playing game   */
    const playGame = () => {
        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorBtn = document.querySelector(".scissor");
        const lizardBtn = document.querySelector(".lizard");
        const spockBtn = document.querySelector(".spock");

        const playerOptions = [rockBtn, paperBtn, scissorBtn, lizardBtn, spockBtn];
        const computerOptions = ["rock", "paper", "scissor", "lizard", "spock"];
    }
/* Default Images for player and computer choice display area */
     document.getElementById("your-choice").src =
     "assets/images/" + "default" + ".png";
   document.getElementById("opponent-choice").src =
     "assets/images/" + "default" + ".png";

   playerOptions.forEach((option) => {
     option.addEventListener("click", function () {
       const movesLeft = document.querySelector(".movesleft");

       moves++;

       movesLeft.innerText = `Moves Left: ${10 - moves}`;

       const choiceNumber = Math.floor(Math.random() * computerOptions.length);

       const computerChoice = computerOptions[choiceNumber];

/* Function to check who wins */

       winner(this.innerText, computerChoice);

/* Calling the gameOver function after 10 moves */

       if (moves == 10) {
         gameOver(playerOptions, movesLeft);
       }
     });
   });

/* Function to decide the winner */
  
      const winner = (player, computer) => {
        const result = document.querySelector(".result");
    
        const playerScoreBoard = document.querySelector(".player-count");
    
        const computerScoreBoard = document.querySelector(".computer-count");
    
        player = player.toLowerCase();
    
        computer = computer.toLowerCase();
    
        // Show Player's clicked button Image
        document.getElementById("your-choice").src =
          "assets/images/" + player + ".png";
    
        // Show Computer's clicked button Image
        document.getElementById("opponent-choice").src =
          "assets/images/" + computer + ".png";
          
          if (player === computer) {
            result.textContent = "Tie";
          } else if (player === "rock") {
            if (computer === "paper") {
              result.textContent = "Computer Won";
              computerScore++;
              computerScoreBoard.textContent = computerScore;
            } else if (computer === "spock") {
              result.textContent = "Computer Won";
              computerScore++;
              computerScoreBoard.textContent = computerScore;
            } else {
              result.textContent = "Player Won";
              playerScore++;
              playerScoreBoard.textContent = playerScore;
            }
          } else if (player === "spock") {
            if (computer === "paper") {
              result.textContent = "Computer Won";
              computerScore++;
              computerScoreBoard.textContent = computerScore;
            } else if (computer === "lizard") {
              result.textContent = "Computer Won";
              computerScore++;
              computerScoreBoard.textContent = computerScore;
            } else {
              result.textContent = "Player Won";
              playerScore++;
              playerScoreBoard.textContent = playerScore;
            }
          } else if (player === "scissor") {
            if (computer === "rock") {
              result.textContent = "Computer Won";
              computerScore++;
              computerScoreBoard.textContent = computerScore;
            } else if (computer === "spock") {
              result.textContent = "Computer Won";
              computerScore++;
              computerScoreBoard.textContent = computerScore;
            } else {
              result.textContent = "Player Won";
              playerScore++;
              playerScoreBoard.textContent = playerScore;
            }
          } else if (player === "lizard") {
            if (computer === "rock") {
              result.textContent = "Computer Won";
              computerScore++;
              computerScoreBoard.textContent = computerScore;
            } else if (computer === "scissor") {
              result.textContent = "Computer Won";
              computerScore++;
              computerScoreBoard.textContent = computerScore;
            } else {
              result.textContent = "Player Won";
              playerScore++;
              playerScoreBoard.textContent = playerScore;
            }
          } else if (player === "paper") {
            if (computer === "lizard") {
              result.textContent = "Computer Won";
              computerScore++;
              computerScoreBoard.textContent = computerScore;
            } else if (computer === "scissor") {
              result.textContent = "Computer Won";
              computerScore++;
              computerScoreBoard.textContent = computerScore;
            } else {
              result.textContent = "Player Won";
              playerScore++;
              playerScoreBoard.textContent = playerScore;
            }
          }
        };
 };
