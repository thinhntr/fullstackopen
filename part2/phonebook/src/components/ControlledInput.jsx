const ControlledInput = ({ text, value, onChange }) => (
  <div>
    {text}:{' '}
    <input value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

export default ControlledInput;
