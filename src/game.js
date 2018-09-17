import React, { Component } from 'react';
import logo from './logo.svg';
import './game.css';
import WebcamCapture from './webcam'

class Game extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="game">
        <header className="game-header">
          <img src={logo} className="game-logo" alt="logo" />
          <h1 className="game-title">Rock, Paper, Scissors with TensorFlow.js</h1>
        </header>
        <p className="game-intro">
          Rock, Paper, Scissors, 1, 2, 3, Shoot!
        </p>
        <WebcamCapture />
      </div>

    );
  }
}

export default Game;