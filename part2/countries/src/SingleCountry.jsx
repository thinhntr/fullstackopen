import axios from 'axios';
import { useState, useEffect } from 'react';

const SingleCountry = ({ country }) => {
  const [lat, lon] = country.latlng;
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
      import.meta.env.VITE_WEATHER_KEY
    }`;
    axios.get(url).then((res) => {
      setWeather(res.data);
    });
  }, [lat, lon]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>

      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} />

      <h2>Weather in {country.capital[0]}</h2>
      {weather !== null && (
        <div>
          <p>temperature {weather.main.temp} Celcius</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
          <p>wind {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default SingleCountry;
