import ControlledInput from "./ControlledInput";

const Filter = ({ keywordState }) => (
  <ControlledInput
    text="filter shown with"
    value={keywordState[0]}
    onChange={keywordState[1]}
  />
);

export default Filter;
