import { useState, useEffect } from 'react';

import personService from './services/persons';

import Error from './components/Error';
import Success from './components/Success';
import Form from './components/Form';
import Persons from './components/Persons';
import Filter from './components/Filter';

const App = () => {
  const nameState = useState('');
  const numberState = useState('');
  const keywordState = useState('');
  const personState = useState([]);
  const newPersonSuccessState = useState(null);
  const numberChangedState = useState(null);
  const alreadyRemovedState = useState(null);

  useEffect(() => {
    personService.getAll().then((res) => personState[1](res.data));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>

      <Success message={newPersonSuccessState[0]} />
      <Success message={numberChangedState[0]} />
      <Error message={alreadyRemovedState[0]} />

      <Filter {...{ keywordState }} />

      <h3>add a new</h3>
      <Form
        {...{
          nameState,
          numberState,
          personState,
          newPersonSuccessState,
          numberChangedState,
        }}
      />

      <h3>Numbers</h3>
      <Persons {...{ personState, keywordState, alreadyRemovedState }} />
    </div>
  );
};

export default App;
