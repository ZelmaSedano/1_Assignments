import React, { useState } from 'react';
import './Question.css';

const mockQuestion = {
  id: 1,
  title: 'What Department of the Armed Forces was Grace Hopper enlisted in?',
  choices: ['Army', 'Navy', 'Air Force'],
  correct: 'Navy',
  correctDescription:
    'Right Answer: Navy.  Grace Hopper enlisted when she was 34 years old (too old) and was too short',
};
// mockQuestion is just a default

// destructure the props directly, then you can set a default prop
// q = properties of a single question b/c I specified it as so below
const Question = ({ q = mockQuestion }) => {
  // scores the guesses they made
  const [guessState, setGuessState] = useState('');

  // create a counter or score state, every time the user guesses correctly
  // if what they chose is correct, increment the score state
  // at the end, say 'you got x out of x right'

  return (
    <div className='q-wrapper'>
      <h3 className='q-title'>{q.title}</h3>
      {/* has to be in curly braces*/}
      {q.choices.map((item, index) => {
        return (
          <button
            className='q-btn'
            onClick={() => {
              setGuessState(item);
            }}
          >
            {item}
          </button>
        );
      })}
      {/* can't have an if/else statement w/in jsx, so we are using a ternary operator */}
      {guessState === q.correct ? (
        <p className='correct-text'> {q.correctDescription}</p>
      ) : (
        <p className='incorrect-text'>Try Again!</p>
      )}
      {/* ^ don't use brackets around q.whatever when already inside brackets */}
      {/* {JSON.stringify(q, null, 2)} */}
      {/* ^this prints out the question data */}
    </div>
  );
};

export default Question;
