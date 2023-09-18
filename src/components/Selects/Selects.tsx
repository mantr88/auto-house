import { useState } from "react";
import Select from "react-select";
import { SelectsWrap } from "./Selects.styles";
import { Cars } from "../../ui/CardList/CardList.types";

type Props = {
  cars: Cars;
  selectedCarsByMark: (option: string | undefined) => void;
};

function Selects({ cars, selectedCarsByMark }: Props) {
  const [isClearable] = useState(true);
  const options = cars.map((car) => ({ value: car.id, label: car.make }));
  const uniqueOptions = [...new Set(options)];
  return (
    <SelectsWrap>
      <Select
        options={uniqueOptions}
        onChange={(option) => selectedCarsByMark(option?.label)}
        isClearable={isClearable}
      />
    </SelectsWrap>
  );
}

export default Selects;
