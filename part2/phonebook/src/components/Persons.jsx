import personService from '../services/persons';

const Persons = ({ personState, keyword }) => {
  const [persons, setPersons] = personState;

  const deletePerson = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => setPersons((persons) => persons.filter((p) => p.id !== id)))
        .catch(() => {
          alert(`${name} was already deleted from server`);
          setPersons((persons) => persons.filter((p) => p.id !== id));
        });
    }
  };

  return persons
    .filter((person) =>
      keyword.trim() === ''
        ? true
        : person.name.toLowerCase().includes(keyword.trim().toLowerCase())
    )
    .map((p) => (
      <div key={p.id}>
        {p.name} {p.number}{' '}
        <button onClick={() => deletePerson(p.name, p.id)}>delete</button>
      </div>
    ));
};
export default Persons;
