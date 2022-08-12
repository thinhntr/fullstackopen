import { nanoid } from 'nanoid';
import ControlledInput from './ControlledInput';

const Form = ({ personState, nameState, numberState }) => {
  const [newName, setNewName] = nameState;
  const [newNumber, setNewNumber] = numberState;
  const [persons, setPersons] = personState;
  const onSubmit = (e) => {
    e.preventDefault();

    // Check duplicate name
    if (persons.some((p) => p.name.includes(newName))) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    // Check empty phone number
    if (newNumber.trim() === '') {
      alert('Please enter a valid phone number');
      return;
    }

    const newPerson = { name: newName, number: newNumber, id: nanoid() };
    setPersons((persons) => persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
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
