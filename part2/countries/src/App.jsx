import { useState, useEffect } from 'react';
import axios from 'axios';
import SingleCountry from './SingleCountry';
import ManyCountries from './ManyCountries';

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

    if (res.length > 10) return <p>Too many matches, specify another filter</p>;

    if (res.length > 1) return <ManyCountries countries={res} />;

    return <SingleCountry country={res[0]} />;
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
