'use strict';

/* Handles the server-side data for the tic-tac-toe game */
class Model {
    constructor() {
        this._board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]; // constructs a blank 2D array/3x3 board
        this._ties = 0;
        this._xWins = 0;
        this._oWins = 0;
        this._games = 0;
        this._turns = 0; // count per game
        this._player = 'X'; // initial player
        this._winner = undefined; 
    }
    
    // Called when space is clicked, checks if game is over or space is empty
    updateBoard(row, col) {  
        if (this._winner || this._turns === 9) { // end of game
            alert("Game has ended. Please click the play again message or exit application.");
        } else if (this._board[row][col] !== 'X' && this._board[row][col] !== 'O') { 
            this._board[row][col] = this._player; // adds either X or O to space
            this._turns++;    
        } else {
            alert("Space already selected. Please select an empty space.");
        }
    }    
    
    // determines whether a row, column, or diagonal has three in a row 
    checkWinner() {
        if (this._board[1][1] !== ' ') { 
            if (this._board[1][0] === this._board[1][1] && this._board[1][1] === this._board[1][2] ||
                this._board[0][1] === this._board[1][1] && this._board[1][1] === this._board[2][1] ||
                this._board[0][0] === this._board[1][1] && this._board[1][1] === this._board[2][2] ||
                this._board[2][0] === this._board[1][1] && this._board[1][1] === this._board[0][2]) {
                this._winner = true;      
            }
        }    
        if (this._board[0][0] !== ' ') {
            if (this._board[0][0] === this._board[0][1] && this._board[0][1] === this._board[0][2] ||
                this._board[0][0] === this._board[1][0] && this._board[1][0] === this._board[2][0]) {
                this._winner = true;     
            }
        }    
        if (this._board[2][2] !== ' ') {
            if (this._board[2][0] === this._board[2][1] && this._board[2][1] === this._board[2][2] ||
                this._board[0][2] === this._board[1][2] && this._board[1][2] === this._board[2][2]) {
                this._winner = true;    
            }      
        }
    }  
      
    // Adds one if either X wins, O wins, or if there is a tie 
    updateScore() {
        if (this._winner && this._player === 'X') {
            this._xWins++;
        } else if (this._winner && this._player === 'O') {
            this._oWins++;
        } else if (this._turns === 9) { // all spaces are filled
            this._ties++;  
        }         
    }    
    
    // Alternates each player's turn
    changeTurn() {
        if (this._games % 2 === 0 && this._turns % 2 === 0 ||
            this._games % 2 === 1 && this._turns % 2 === 1) {
            this._player = 'X';    
        } else {
            this._player = 'O';
        }        
    }
        
    // Creates win/tie message and play again prompt        
    endGame() {
        if (this._winner) {
            if (this._player === 'X') {
                this._winner = 'O';
            } else {
                this._winner = 'X';
            }
            this._player = "Player " + this._winner + " wins! Play again (click me)?";
        } else if (this._turns === 9) {
            this._player = "It's a tie! Play again (click me)?";
        }         
    }    
   
    // Called when play again message is clicked
    reset() {
        this._board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]; // resets game board to blank
        this._games++;
        this._turns = 0; // resets number of turns
        this._winner = undefined;
        if (this._games % 2 === 0) { // alternates starting player each game
            this._player = 'X';
        } else {
            this._player = 'O';
        }
    }
    
    get board() {
        return this._board;
    }
    
    get ties() {
        return this._ties;
    }
    
    get xWins() {
        return this._xWins;
    }
    
    get oWins() {
        return this._oWins;
    }
    
    get turns() {
        return this._turns;
    }
    
    get player() {
        return this._player;
    }
    
    get winner() {
        return this._winner;
    }
}

module.exports.Model = Model; // Allows Model class to be used in main.js
