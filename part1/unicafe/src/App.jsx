import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h1>statistics</h1>
      {good || neutral || bad ? (
        <>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {good + neutral + bad}</p>
          <p>average {(good - bad) / (good + neutral + bad)}</p>
          <p>positive {(good / (good + neutral + bad)) * 100} %</p>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood((val) => val + 1)}>good</button>
      <button onClick={() => setNeutral((val) => val + 1)}>neutral</button>
      <button onClick={() => setBad((val) => val + 1)}>bad</button>

      <Statistics {...{ good, neutral, bad }} />
    </>
  );
};
export default App;
