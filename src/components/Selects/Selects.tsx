import { useState } from "react";
import Select from "react-select";
import {
  FormInput,
  SearchButton,
  SelectBlocTitle,
  SelectBlocWrap,
  SelectsWrap,
} from "./Selects.styles";
import makes from "../../data/makes.json";

type Props = {
  selectedCarsByMark: (option: string | undefined) => void;
  selectedCarsByPrice: (option: number | undefined) => void;
  selectedCarsByMileage: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Selects({
  selectedCarsByMark,
  selectedCarsByPrice,
  selectedCarsByMileage,
}: Props) {
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
      <SelectBlocWrap>
        <SelectBlocTitle>Car brand</SelectBlocTitle>
        <Select
          options={makesOptions}
          onChange={(option) => selectedCarsByMark(option?.label)}
          isClearable={isClearable}
          name="mark"
          placeholder="Enter the text"
          styles={{
            control: (base) => ({
              ...base,
              paddingTop: 6,
              paddingLeft: 18,
              paddingBottom: 6,
              borderRadius: 14,
              background: "#F7F7FB",
              borderStyle: "none",
              borderColor: "#fff",
              boxShadow: "#fff",
              ":hover": {
                ...base[":hover"],
                borderColor: "#fff",
                boxShadow: "#fff",
              },
            }),
            placeholder: (base) => ({
              ...base,
              color: "#121417",
              fontFamily: "Manrope",
              fontSize: 18,
              fontStyle: "normal",
              fontWeight: 500,
            }),
            indicatorsContainer: (base) => ({
              ...base,
              marginLeft: 51,
              marginRight: 18,
            }),
          }}
        />
      </SelectBlocWrap>
      <SelectBlocWrap>
        <SelectBlocTitle>Price/ 1 hour</SelectBlocTitle>
        <Select
          options={priceOptions}
          onChange={(option) => selectedCarsByPrice(option?.label)}
          isClearable={isClearable}
          name="price"
          placeholder="To $"
          styles={{
            control: (base) => ({
              ...base,
              paddingTop: "6px",
              paddingLeft: "18px",
              paddingBottom: "6px",
              borderRadius: 14,
              background: "#F7F7FB",
              borderStyle: "none",
              borderColor: "#fff",
              boxShadow: "#fff",
              ":hover": {
                ...base[":hover"],
                borderColor: "#fff",
                boxShadow: "#fff",
              },
            }),
            placeholder: (base) => ({
              ...base,
              color: "#121417",
              fontFamily: "Manrope",
              fontSize: 18,
              fontStyle: "normal",
              fontWeight: 500,
            }),
            indicatorsContainer: (base) => ({
              ...base,
              marginLeft: 51,
              marginRight: 18,
            }),
          }}
        />
      </SelectBlocWrap>
      <SelectBlocWrap>
        <SelectBlocTitle>Сar mileage / km</SelectBlocTitle>
        <form
          onSubmit={selectedCarsByMileage}
          name="search_form"
          autoComplete="on"
          noValidate
        >
          <label>
            <FormInput
              id="startMileage"
              type="text"
              name="startMileage"
              placeholder="From"
            />
            <FormInput
              id="endMileage"
              type="text"
              name="endMileage"
              placeholder="To"
            />
          </label>
          <SearchButton type="submit">Search</SearchButton>
        </form>
      </SelectBlocWrap>
    </SelectsWrap>
  );
}

export default Selects;
