import { useState } from 'react';

const Numbers = ({ persons }) => (
  <div>
    <h2>Numbers</h2>
    {persons.map((p) => (
      <p key={p.name}>{p.name}</p>
    ))}
  </div>
);

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    if (persons.map((p) => p.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      return
    }
    setPersons((persons) => persons.concat({ name: newName }));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Numbers persons={persons} />
    </div>
  );
};

export default App;
