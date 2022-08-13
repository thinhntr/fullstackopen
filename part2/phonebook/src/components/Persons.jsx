import personService from '../services/persons';

const Persons = ({ personState, keywordState, alreadyRemovedState }) => {
  const [persons, setPersons] = personState;
  const [, setAlreadyRemoved] = alreadyRemovedState;
  const keyword = keywordState[0];

  const deletePerson = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => setPersons((persons) => persons.filter((p) => p.id !== id)))
        .catch(() => {
          setPersons((persons) => persons.filter((p) => p.id !== id));
          setAlreadyRemoved(`${name} has already been removed from server`);
          setTimeout(() => setAlreadyRemoved(null), 4000);
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
