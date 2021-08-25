import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import { textInput, Radio, Button } from './Forecast.module.css';

const Forecast = () => {
  let [city, setCity] = useState('');
  let [unit, setUnit] = useState('imperial');
  let [responseObj, setResponseObj] = useState({});
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
          throw new Error('message');
        }

        setResponseObj(response);
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
      <h2>Find Current Weather Conditions</h2>
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
      {/* repeat 5 times */}
      <Conditions
        responseObj={responseObj}
        error={error}
        loading={loading}
        index={0}
      />
      <Conditions
        responseObj={responseObj}
        error={error}
        loading={loading}
        index={8}
      />
      <Conditions
        responseObj={responseObj}
        error={error}
        loading={loading}
        index={16}
      />
      <Conditions
        responseObj={responseObj}
        error={error}
        loading={loading}
        index={24}
      />
      <Conditions
        responseObj={responseObj}
        error={error}
        loading={loading}
        index={32}
      />
    </div>
  );
};

export default Forecast;
