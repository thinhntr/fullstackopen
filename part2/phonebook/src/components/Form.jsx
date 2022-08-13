import personService from '../services/persons';

import ControlledInput from './ControlledInput';

const Form = ({ personState, nameState, numberState }) => {
  const [newName, setNewName] = nameState;
  const [newNumber, setNewNumber] = numberState;
  const [persons, setPersons] = personState;

  const updateNumber = (person) => {
    const updatedPerson = { ...person, number: newNumber };
    personService
      .update(person.id, updatedPerson)
      .then((res) =>
        setPersons((persons) =>
          persons.map((p) => (p.id !== person.id ? p : res.data))
        )
      );
  };

  const addPerson = (e) => {
    e.preventDefault();

    // Check duplicate name
    for (const person of persons) {
      if (person.name !== newName) continue;
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        updateNumber(person);
      }
      return;
    }

    // Check empty phone number
    if (newNumber.trim() === '') {
      alert('Please enter a valid phone number');
      return;
    }

    const newPerson = { name: newName, number: newNumber };
    personService.create(newPerson).then((res) => {
      setPersons((persons) => persons.concat(res.data));
      setNewName('');
      setNewNumber('');
    });
  };

  return (
    <form onSubmit={addPerson}>
      <ControlledInput text="name" value={newName} onChange={setNewName} />
      <ControlledInput
        text="number"
        value={newNumber}
        onChange={setNewNumber}
      />

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
