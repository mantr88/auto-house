import { useState } from "react";
import Card from "../Card/Card";
import { Cars } from "./CardList.types";
import { ListContainer, LoadBtn } from "./CardList.styled";
import Selects from "../../components/Selects/Selects";

type Mark = string | undefined;
type Price = number | undefined;

type CardListProps = {
  cars: Cars;
  isLoading: boolean;
};

function CardList({ cars, isLoading }: CardListProps) {
  const [filterByMark, setFilterByMark] = useState<Mark>("");
  const [filterByPrice, setFilterByPrice] = useState<Price>(0);
  const [startMileage, setStartMileage] = useState(0);
  const [endMileage, setEndMileage] = useState(0);
  const [visibleCards, setVisibleCards] = useState(8);

  const clickBtnLoadMoreHandler = () => {
    setVisibleCards((pervState) => pervState + 8);
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

  const filtersCars = (
    cars: Cars,
    filterByMark: Mark,
    filterByPrice: Price,
    startMileage: number,
    endMileage: number
  ) => {
    let filteredCars = [...cars];

    if (filterByMark) {
      const normalizeFilterByMark = filterByMark.toLowerCase();

      filteredCars = filteredCars.filter((car) =>
        car.make.toLowerCase().includes(normalizeFilterByMark)
      );
    }

    if (filterByPrice) {
      filteredCars = filteredCars.filter((car) => {
        return Number(car.rentalPrice.slice(1)) <= filterByPrice;
      });
    }

    if (startMileage) {
      filteredCars = filteredCars.filter((car) => car.mileage >= startMileage);
    }

    if (endMileage) {
      filteredCars = filteredCars.filter((car) => car.mileage <= endMileage);
    }

    return filteredCars;
  };

  const visibleCars = filtersCars(
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
        {isLoading && <div>LOADING...</div>}
        {visibleCars.slice(0, visibleCards).map((car, idx) => (
          <Card key={idx} car={car} />
        ))}
        {visibleCards < 32 && (
          <LoadBtn type="button" onClick={clickBtnLoadMoreHandler}>
            Load more
          </LoadBtn>
        )}
      </ListContainer>
    </>
  );
}

export default CardList;
