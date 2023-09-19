import { useState } from "react";
import Select from "react-select";
import { SelectsWrap } from "./Selects.styles";
import { Cars } from "../../ui/CardList/CardList.types";
import makes from "../../data/makes.json";

type Props = {
  cars: Cars;
  selectedCarsByMark: (option: string | undefined) => void;
  selectedCarsByPrice: (option: number | undefined) => void;
};

function Selects({ cars, selectedCarsByMark, selectedCarsByPrice }: Props) {
  const [isClearable] = useState(true);
  const makesOptions = makes.map((make, idx) => ({ value: idx, label: make }));
  const prices = Array.from(
    { length: (500 - 0) / 10 + 1 },
    (_, idx) => idx * 10
  );
  const priceOptions = prices.map((price, idx) => ({
    value: idx,
    label: price,
  }));
  return (
    <SelectsWrap>
      <Select
        options={makesOptions}
        onChange={(option) => selectedCarsByMark(option?.label)}
        isClearable={isClearable}
        name="mark"
      />
      <Select
        options={priceOptions}
        onChange={(option) => selectedCarsByPrice(option?.label)}
        isClearable={isClearable}
        name="price"
      />
    </SelectsWrap>
  );
}

export default Selects;
