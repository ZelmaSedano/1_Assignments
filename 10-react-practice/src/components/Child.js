import React from 'react';
import './Child.css';

function Child(props) {
  return (
    <div className='child'>
      <h1 className='child-h1'>Child</h1>
      <button onClick={() => props.changeWord('Zelma')}>Click to Change</button>
    </div>
  );
}

export default Child;
