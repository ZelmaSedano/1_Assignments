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
const Question = ({
  q = mockQuestion,
  setCorrectGuessState,
  correctGuessState,
  setGuessState,
  guessState,
  count,
}) => {
  // onClick function - if guessState is correct, then increment correctGuessState by 1

  return (
    <div>
      {count >= 4 ? (
        <div className='q-wrapper'>
          <div>
            <p className='last-page'>
              Congratulations! You've finished the quiz.
            </p>
          </div>
        </div>
      ) : (
        <div className='q-wrapper'>
          <h3 className='q-title'>{q.title}</h3>
          {q.choices.map((item, index) => {
            return (
              <button
                className='q-btn'
                onClick={() => {
                  setGuessState(item);
                  guessState === q.correct &&
                    setCorrectGuessState(correctGuessState + 1);
                }}
              >
                {item}
              </button>
            );
          })}
          {/* can't have an if/else statement w/in jsx, so we are using a ternary operator */}
          {guessState === '' ? (
            <p>
              <br></br>
            </p>
          ) : guessState === q.correct ? (
            <p className='correct-text'> {q.correctDescription}</p>
          ) : (
            <p className='incorrect-text'>Incorrect! Please proceed</p>
          )}

          {/* ^ don't use brackets around q.whatever when already inside brackets */}
          {/* {JSON.stringify(q, null, 2)} */}
          {/* ^this prints out the question data */}
        </div>
      )}
    </div>
  );
};

export default Question;
