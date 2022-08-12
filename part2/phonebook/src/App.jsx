import { useState, useEffect } from 'react';
import axios from 'axios';

import Form from './components/Form';
import Persons from './components/Persons';
import Filter from './components/Filter';

const App = () => {
  const nameState = useState('');
  const numberState = useState('');
  const keywordState = useState('');
  const personState = useState([]);
  const [persons, setPersons] = personState;

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => setPersons(response.data));
  }, [setPersons]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter {...{ keywordState }} />

      <h3>add a new</h3>
      <Form {...{ nameState, numberState, personState }} />

      <h3>Numbers</h3>
      <Persons persons={persons} keyword={keywordState[0]} />
    </div>
  );
};

export default App;
