import { useState } from 'react';

const randomInt = (max) => Math.floor(Math.random() * max);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];

  const [selected, setSelected] = useState(randomInt(anecdotes.length));
  const [points, setPoints] = useState(() =>
    Object.assign({}, Array(anecdotes.length).fill(0))
  );

  const nextAnecdotes = () => setSelected(randomInt(anecdotes.length));

  const vote = () =>
    setPoints((points) => ({ ...points, [selected]: points[selected] + 1 }));

  const mostVotedIdx = () =>
    Object.entries(points).reduce(
      (maxIdx, [idx, votes]) => (votes > points[maxIdx] ? idx : maxIdx),
      0
    );

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdotes}>next anecdotes</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotedIdx()]}</p>
      <p>has {points[mostVotedIdx()]} votes</p>
    </>
  );
};

export default App;
