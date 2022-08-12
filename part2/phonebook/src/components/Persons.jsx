const Persons = ({ persons, keyword }) =>
  persons
    .filter((person) =>
      keyword.trim() === ''
        ? true
        : person.name.toLowerCase().includes(keyword.trim().toLowerCase())
    )
    .map((p) => (
      <p key={p.id}>
        {p.name} {p.number}
      </p>
    ));
export default Persons;
