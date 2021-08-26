import React from 'react';
import { Wrapper, Small, Loader } from './Conditions.module.css';

const conditions = (props) => {
  return (
    <div className={Wrapper}>
      {/* error handling */}
      {props.error && (
        <small className={Small}>Please enter a valid city.</small>
      )}

      {/* loading image, if data isn't avaialble */}
      {props.loading && <div className={Loader} />}

      {/* actual component: '200' = success status code */}
      {/* setresponseObj(response) from json data - means responseObj = json data */}
      {props.responseObj.cod === '200' ? (
        <div>
          <p>
            {/* city name */}
            <strong>{props.responseObj.city.name}</strong>
          </p>
          {/* add icons */}
          <p>
            {/* list[0].main.temp is the path to temp in json file */}
            {Math.round(props.responseObj.list[props.index].main.temp)} degrees
            out with{' '}
            {props.responseObj.list[props.index].weather[0].description} at{' '}
            {props.responseObj.list[props.index].dt_txt}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default conditions;
// comment
