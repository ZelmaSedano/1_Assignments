import React, { useEffect, useState } from 'react';
import SquareComponent from './modules/SquareComponent';

// clears all the square values
const clearState = ['', '', '', '', '', '', '', '', '', ''];

// based off this YouTube Tutorial: https://www.youtube.com/watch?v=ZH9RXSVjj4Y

// App Component
function App() {
  // Two States: 1) gameState, 2) isXChange
  //**  determines the winner?************************************************************???
  const [gameState, updateGameState] = useState(clearState);
  // changes X to O
  const [isXChange, updateIsXChange] = useState(false);

  // click function that an index
  const onUserClicked = (index) => {
    // takes the array from gameState
    let strings = Array.from(gameState);
    // ** checks the array from gameState, if it has the index, just return*****************???
    if (strings[index]) return;
    strings[index] = isXChange ? 'X' : '0';
    updateIsXChange(!isXChange);
    updateGameState(strings);
  };

  const clearGame = () => {
    updateGameState(clearState);
  };
  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      clearGame();
      alert(`Ta da ! ${winner} won the Game !`);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(
      'Class: App, Function: checkWinner ==',
      gameState[0],
      gameState[1],
      gameState[2]
    );
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className='app-header'>
      <p className='heading-text'>Tic-Tac-Toe</p>
      <div className='row jc-center'>
        <SquareComponent
          className='b-bottom-right'
          onClick={() => onUserClicked(0)}
          state={gameState[0]}
        />
        <SquareComponent
          className='b-bottom-right'
          onClick={() => onUserClicked(1)}
          state={gameState[1]}
        />
        <SquareComponent
          className='b-bottom'
          onClick={() => onUserClicked(2)}
          state={gameState[2]}
        />
      </div>
      <div className='row jc-center'>
        <SquareComponent
          className='b-bottom-right'
          onClick={() => onUserClicked(3)}
          state={gameState[3]}
        />
        <SquareComponent
          className='b-bottom-right'
          onClick={() => onUserClicked(4)}
          state={gameState[4]}
        />
        <SquareComponent
          className='b-bottom'
          onClick={() => onUserClicked(5)}
          state={gameState[5]}
        />
      </div>
      <div className='row jc-center'>
        <SquareComponent
          className='b-right'
          onClick={() => onUserClicked(6)}
          state={gameState[6]}
        />
        <SquareComponent
          className='b-right'
          onClick={() => onUserClicked(7)}
          state={gameState[7]}
        />
        <SquareComponent
          onClick={() => onUserClicked(8)}
          state={gameState[8]}
        />
      </div>
      <button className='clear-button' onClick={clearGame}>
        Clear Game
      </button>
      <p className='fc-aqua fw-600'>Zelma, Ink.</p>
    </div>
  );
}

export default App;
