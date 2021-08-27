// comment
// day of the week
// const date = new Date(props.responseObj.list[props.index].dt_txt);

// const daysOfTheWeek = {
//   0: 'Sunday',
//   1: 'Monday',
//   2: 'Tuesday',
//   3: 'Wednesday',
//   4: 'Thursday',
//   5: 'Friday',
//   6: 'Saturday',
// };

// const day = daysOfTheWeek[date.getDay()];
// const date = new Date(props.responseObj.list[props.index].dt);

// const unixTimestamp = props.responseObj.list[props.index].dt;
// const milliseconds = unixTimestamp * 1000;
// const dateObject = new Date(milliseconds);
// const humanDateFormat = dateObject.toLocaleDateString();

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

      {/* setresponseObj(response) from json data - means responseObj = json data */}
      {props.responseObj.cod === '200' ? (
        <div>
          <p>{props.responseObj.city.name}</p>
          {/* {day} */}
          {/* {date} */}
          {/* {humanDateFormat} */}
          <img
            src={`http://openweathermap.org/img/wn/${
              props.responseObj.list[props.index].weather[0].icon
            }@2x.png`}
            alt='weather icon'
          ></img>
          {/* add icons */}
          <p>
            {/* list[0].main.temp is the path to temp in json file */}
            {Math.round(props.responseObj.list[props.index].main.temp)} degrees
          </p>
          <p>{props.responseObj.list[props.index].weather[0].description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default conditions;
