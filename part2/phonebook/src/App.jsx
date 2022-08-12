import { useState } from 'react';
import { nanoid } from 'nanoid';

import Form from './components/Form';
import Persons from './components/Persons';
import Filter from './components/Filter';

const mockData = [
  { name: 'Arto Hellas', number: '040-123456', id: nanoid() },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: nanoid() },
  { name: 'Dan Abramov', number: '12-43-234345', id: nanoid() },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: nanoid() },
];

const App = () => {
  const personState = useState([...mockData]);
  const nameState = useState('');
  const numberState = useState('');
  const keywordState = useState('');

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter {...{ keywordState }} />

      <h3>add a new</h3>
      <Form {...{ nameState, numberState, personState }} />

      <h3>Numbers</h3>
      <Persons persons={personState[0]} keyword={keywordState[0]} />
    </div>
  );
};

export default App;
