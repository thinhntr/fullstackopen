import Header from './Header';
import Content from './Content';

const Course = ({id, name, parts}) => {
  const total = parts
    .map((part) => part.exercises)
    .reduce((a, b) => a + b);
  
  return (
    <div key={id}>
      <Header text={name} />
      <Content parts={parts} />
      <p><b>total of {total} exercises</b></p>
    </div>
  );
};

export default Course;
