import React from 'react';
import { Wrapper, Small, Loader } from './Conditions.module.css';

const conditions = (props) => {
  return (
    <div className={Wrapper}>
      {/* error */}
      {props.error && (
        <small className={Small}>Please enter a valid city.</small>
      )}

      {/* loading image */}
      {props.loading && <div className={Loader} />}

      {/* actual component; 200 = success status code */}
      {/* 2nd version: is a string */}
      {props.responseObj.cod === '200' ? (
        <div>
          <p>
            {/* responseObj.city */}
            <strong>{props.responseObj.city.name}</strong>
          </p>
          {/* add icons */}
          <p>
            {Math.round(props.responseObj.list[0].main.temp)} degrees out with{' '}
            {props.responseObj.list[props.index].weather[0].description} at{' '}
            {props.responseObj.list[props.index].dt_txt}
          </p>
          {/* <Conditions
          /> */}
        </div>
      ) : null}
    </div>
  );
};

export default conditions;
// comment
