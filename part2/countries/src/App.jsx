import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [keyword, setKeyword] = useState('');

  const filteredCountries = () => {
    const res = countries.filter((country) =>
      keyword.trim() === ''
        ? true
        : country.name.common
            .toLowerCase()
            .includes(keyword.trim().toLowerCase())
    );

    if (res.length === 0) return res;

    if (res.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    }

    if (res.length > 1) {
      return (
        <ul>
          {res.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ul>
      );
    }

    const country = res[0];
    return (
      <>
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
      </>
    );
  };

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <>
      <p>find countries</p>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      {filteredCountries()}
    </>
  );
};

export default App;
