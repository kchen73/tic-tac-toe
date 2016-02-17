'use strict';

var React = require('react'); // imports React.js so games can be displayed on webpage
var ReactDOM = require('react-dom');
var game = require('./game.js'); // imports game Model

var model = new game.Model;

// Header for game
var Title = React.createClass({
    render: function() {
        return <h1>React Tac Toe!!!</h1>;
    }
});

// Message for turns and end of game
var Content = React.createClass({
    messageClick: function() {
        controller.messageClick();
    },
    render: function() {
        // Determines whether game has ended
        if (model.winner || model.turns === 9) {
            return <p id="head" onClick={this.messageClick}>{model.player}</p>;   
        } else {
            return <p id="head">Your turn, {model.player}</p>;            
        }
    }    
});

// Tic-tac-toe board (all nine spaces)
var Board = React.createClass({
    handleClick: function(empty, num) { 
        controller.handleClick(empty, num);
    },
    render: function() {
        return (
            <div>
                <button id="1" onClick={this.handleClick}>{model.board[0][0]}</button>
                <button id="2" onClick={this.handleClick}>{model.board[0][1]}</button>
                <button id="3" onClick={this.handleClick}>{model.board[0][2]}</button>
                <br/>
                <button id="4" onClick={this.handleClick}>{model.board[1][0]}</button>
                <button id="5" onClick={this.handleClick}>{model.board[1][1]}</button>
                <button id="6" onClick={this.handleClick}>{model.board[1][2]}</button>
                <br/>
                <button id="7" onClick={this.handleClick}>{model.board[2][0]}</button>
                <button id="8" onClick={this.handleClick}>{model.board[2][1]}</button>
                <button id="9" onClick={this.handleClick}>{model.board[2][2]}</button>
            </div>
        );
    }
});

// Scoreboard of total wins and ties
var Score = React.createClass({
    render: function() {
        return (
            <div>
                <p id="head">Scoreboard:</p>
                <p>X Wins: {model.xWins}</p>
                <p>O Wins: {model.oWins}</p>
                <p>Ties: {model.ties}</p>
            </div>
        );
    }
});

// Composition of all game parts
var Game = React.createClass({
    render: function() {
        return (
            <div>
                <Title />
                <Content />
                <Board />
                <Score />
            </div>
        );
    }
});

// Initial render of game
ReactDOM.render(<Game />, document.getElementById('content'));

// Re-renders game to update variables
function update() {
    ReactDOM.render(<Game />, document.getElementById('content'));    
}

// Controller to manipulate Model data and update View
var controller = {
    messageClick: function() {
        model.reset();
        update();
    },
    // Uses react ID data to determine which space to update
    handleClick: function(empty, num) {
        num = num.split(".");
        num = num[3];
        var dimension = Number(num); // Turns react ID data from string to integer
        // Determines which spot to update based on react ID
        if (dimension <= 2) {
            model.updateBoard(0, dimension);
        } else if (dimension <= 6) {
            model.updateBoard(1, (dimension - 1) % 3);
        } else if (dimension <= 9) {
            model.updateBoard(2, (dimension - 2) % 3);
        } else {
            model.updateBoard(2, 2);
        }
        model.checkWinner();
        model.updateScore();
        model.changeTurn();
        model.endGame();  
        update();
    }
}

