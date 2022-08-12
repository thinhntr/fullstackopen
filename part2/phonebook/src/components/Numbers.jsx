const Numbers = ({ persons }) => (
  <div>
    <h2>Numbers</h2>
    {persons.map((p) => (
      <p key={p.name}>{p.name}</p>
    ))}
  </div>
);

export default Numbers;
