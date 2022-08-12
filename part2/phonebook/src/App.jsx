import { useState } from 'react';

import Numbers from './components/Numbers';
import ControlledInput from './components/ControlledInput';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const addPerson = (e) => {
    e.preventDefault();
    if (persons.map((p) => p.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons((persons) => persons.concat({ name: newName }));
    setNewName('');
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
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
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
