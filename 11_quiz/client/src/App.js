import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Question from './components/Question';

function App() {
  const [data, setData] = useState(null);
  //used to changed index -> data[0], which will move through the questions
  const [count, setCount] = useState(0);
  // START HERE
  const [correctGuessState, setCorrectGuessState] = useState(0);
  const [guessState, setGuessState] = useState('');

  console.log('count:', count);

  // incrementing function
  function increment() {
    // -2 keeps it from going to default mockQuestion values
    if (count <= data.length - 1) {
      setCount((prevCount) => prevCount + 1);
    }
  }
  // 1) importing the JSON data from Express
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((qData) => {
        setData(qData);
      });
  }, []);

  return (
    <div className='App'>
      <Header />
      {!data ? (
        <p>'Loading...'</p>
      ) : (
        <Question
          q={data[count]}
          guessState={guessState}
          setGuessState={setGuessState}
          setCorrectGuessState={setCorrectGuessState}
          correctGuessState={correctGuessState}
          count={count}
        />
      )}
      {/* 1) count increments b/c we are updating setCount; we are incrementing setCount w/ 'increment' function */}
      <button
        onClick={() => {
          increment();
          setGuessState('');
        }}
      >
        Next
      </button>
      {/* everytime you click the next button, it increments the number inside data brackets */}
      <div className='results'>
        You answered {correctGuessState} questions correctly
      </div>
    </div>
  );
}

export default App;
