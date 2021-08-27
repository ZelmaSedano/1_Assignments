import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import { textInput, Radio, Button } from './Forecast.module.css';

const Forecast = () => {
  // states that set the value for city, unit, responseObj (json), and error
  let [city, setCity] = useState('');
  let [unit, setUnit] = useState('imperial');
  let [responseObj, setResponseObj] = useState({});
  let [weatherList, setweatherList] = useState([]);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }

    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});
    setLoading(true);

    let uriEncodedCity = encodeURIComponent(city);

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${uriEncodedCity}&units=${unit}&appid=81eaae9c9ea6f28f239fe73eebafd259`
      // `https://api.openweathermap.org/data/2.5/weather?units=${unit}&q=${uriEncodedCity}&appid=81eaae9c9ea6f28f239fe73eebafd259`
      // {
      //   method: 'GET',
      //   headers: {
      //     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      //     'x-rapidapi-key': `81eaae9c9ea6f28f239fe73eebafd259`,
      //   },
      // }
    )
      .then((response) => response.json())
      .then((response) => {
        // 2nd version: 200 is a string
        if (response.cod !== '200') {
          throw new Error();
        }

        // takes take the json & saves json response as responseObj state
        setResponseObj(response);
        // takes the json and saves the array 'list' as the state 'weatherList'
        setweatherList(response.list);
        setLoading(false);
      })

      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log(err.message);
      });
  }

  return (
    <div>
      <h2 className='forecast-text'>5-day Forecast</h2>
      <form onSubmit={getForecast}>
        <input
          type='text'
          placeholder='Enter City'
          maxLength='50'
          className={textInput}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label className={Radio}>
          <input
            type='radio'
            name='units'
            checked={unit === 'imperial'}
            value='imperial'
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label className={Radio}>
          <input
            type='radio'
            name='units'
            checked={unit === 'metric'}
            value='metric'
            onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>

        <button className={Button} type='submit'>
          Get Forecast
        </button>
      </form>

      <div className='cards'>
        {/* repeat 5 times */}
        {weatherList.map((item, index) => {
          // lets you see the entire list
          // console.log(item);
          if (index % 8 === 0) {
            return (
              <Conditions
                responseObj={responseObj}
                error={error}
                loading={loading}
                index={index}
                className='card'
              />
            );
          } else {
            return null;
          }
        })}
        {/* <Conditions
          responseObj={responseObj}
          error={error}
          loading={loading}
          index={0}
          className='card'
        /> */}
        {/* <Conditions
          responseObj={responseObj}
          error={error}
          loading={loading}
          index={8}
          className='card'
        />
        <Conditions
          responseObj={responseObj}
          error={error}
          loading={loading}
          index={16}
          className='card'
        />
        <Conditions
          responseObj={responseObj}
          error={error}
          loading={loading}
          index={24}
          className='card'
        />
        <Conditions
          responseObj={responseObj}
          error={error}
          loading={loading}
          index={32}
          className='card'
        /> */}
      </div>
    </div>
  );
};

export default Forecast;
