import { useState } from 'react';
import SingleCountry from './SingleCountry';

const ManyCountries = ({ countries }) => {
  const [idx, setIdx] = useState(-1);

  return (
    <>
      <ul>
        {countries.map((country, i) => (
          <li key={country.name.common}>
            {country.name.common}{' '}
            <button onClick={() => (i !== idx ? setIdx(i) : setIdx(-1))}>
              {i !== idx ? 'show' : 'hide'}
            </button>
          </li>
        ))}
      </ul>
      {idx >= 0 && <SingleCountry country={countries[idx]} />}
    </>
  );
};

export default ManyCountries;
