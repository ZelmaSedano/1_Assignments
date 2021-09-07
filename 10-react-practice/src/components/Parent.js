import React, { useState } from 'react';
import './Parent.css';
import Child from './Child';

function Parent() {
  const [word, setWord] = useState('Parent');
  return (
    <div className='parent'>
      <h1>Click the button below to change the Parent's name :) </h1>
      <h1 className='parent-h1'>{word}</h1>
      <Child changeWord={(word) => setWord(word)} />
    </div>
  );
}

export default Parent;
