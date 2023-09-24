import { useState } from "react";
import { Bars } from "react-loader-spinner";
import Card from "../Card/Card";
import { CardListProps, Mark, Price } from "./CardList.types";
import { ListContainer, LoadBtn } from "./CardList.styled";
import Selects from "../../components/Selects/Selects";
import { filtersCars } from "../../utils/filtersCars";

function CardList({ cars, isLoading }: CardListProps) {
  const [filterByMark, setFilterByMark] = useState<Mark>("");
  const [filterByPrice, setFilterByPrice] = useState<Price>(0);
  const [startMileage, setStartMileage] = useState(0);
  const [endMileage, setEndMileage] = useState(0);
  const [visibleItems, setVisibleItems] = useState(8);

  const clickBtnLoadMoreHandler = () => {
    setVisibleItems((pervState) => pervState + 8);
  };

  const selectedCarsByMark = (selectedMark: Mark) => {
    setFilterByMark(selectedMark);
  };

  const selectedCarsByPrice = (selectedPrice: Price) => {
    setFilterByPrice(selectedPrice);
  };

  const selectedCarsByMileage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const startMileageInput = e.currentTarget.querySelector(
      'input[name="startMileage"]'
    ) as HTMLInputElement;
    const endMileageInput = e.currentTarget.querySelector(
      'input[name="endMileage"]'
    ) as HTMLInputElement;

    if (startMileageInput && endMileageInput) {
      setStartMileage(Number(startMileageInput.value));
      setEndMileage(Number(endMileageInput.value));
    }
  };

  const filteredList = filtersCars(
    cars,
    filterByMark,
    filterByPrice,
    startMileage,
    endMileage
  );

  return (
    <>
      <Selects
        selectedCarsByMark={selectedCarsByMark}
        selectedCarsByPrice={selectedCarsByPrice}
        selectedCarsByMileage={selectedCarsByMileage}
      />
      <ListContainer>
        {isLoading && (
          <Bars
            height="80"
            width="80"
            color="#3470FF"
            wrapperStyle={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "30vh",
            }}
          />
        )}
        {filteredList.slice(0, visibleItems).map((car, idx) => (
          <Card key={idx} car={car} />
        ))}
        {visibleItems < 32 && filteredList.length >= 8 && (
          <LoadBtn type="button" onClick={clickBtnLoadMoreHandler}>
            Load more
          </LoadBtn>
        )}
      </ListContainer>
    </>
  );
}

export default CardList;
