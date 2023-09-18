import Select from "react-select";
import { SelectsWrap } from "./Selects.styles";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function Selects() {
  return (
    <SelectsWrap>
      <Select options={options} />
    </SelectsWrap>
  );
}

export default Selects;
