import { useState } from 'react';

const StatisticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h1>statistics</h1>
      {good || neutral || bad ? (
        <>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine
            text="average"
            value={(good - bad) / (good + neutral + bad)}
          />
          <StatisticLine
            text="positive"
            value={`${(good / (good + neutral + bad)) * 100} %`}
          />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const Button = ({ callback, text }) => {
  return <button onClick={callback}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <>
      <h1>give feedback</h1>
      <Button callback={() => setGood((val) => val + 1)} text="good" />
      <Button callback={() => setNeutral((val) => val + 1)} text="neutral" />
      <Button callback={() => setBad((val) => val + 1)} text="bad" />

      <Statistics {...{ good, neutral, bad }} />
    </>
  );
};
export default App;
