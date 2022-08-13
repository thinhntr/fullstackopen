import { useState, useEffect } from 'react';

import personService from './services/persons';

import Form from './components/Form';
import Persons from './components/Persons';
import Filter from './components/Filter';

const App = () => {
  const nameState = useState('');
  const numberState = useState('');
  const keywordState = useState('');
  const personState = useState([]);

  useEffect(() => {
    personService.getAll().then((res) => personState[1](res.data));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter {...{ keywordState }} />

      <h3>add a new</h3>
      <Form {...{ nameState, numberState, personState }} />

      <h3>Numbers</h3>
      <Persons personState={personState} keyword={keywordState[0]} />
    </div>
  );
};

export default App;
