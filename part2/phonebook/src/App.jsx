import { useState } from 'react';

import Numbers from './components/Numbers';
import ControlledInput from './components/ControlledInput';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (e) => {
    e.preventDefault();
    // Check duplicate name
    if (persons.map((p) => p.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    // Check empty phone number
    if (newNumber.trim() === '') {
      alert('Please enter a valid phone number');
      return;
    }

    const newPerson = { name: newName, number: newNumber };
    setPersons((persons) => persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <ControlledInput
          text="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <ControlledInput
          text="number"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Numbers persons={persons} />
    </div>
  );
};

export default App;
