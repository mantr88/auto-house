import { useState, useEffect } from "react";
import { getCars } from "../../services/api";
import Card from "../Card/Card";
import { Cars } from "./CardList.types";
import { ListContainer, LoadBtn } from "./CardList.styled";
import Selects from "../../components/Selects/Selects";

type Mark = string | undefined;

function CardList() {
  const [cars, setCars] = useState<Cars | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filterByMark, setFilterByMark] = useState<Mark>("");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setIsLoading(true);
        const result = await getCars();
        if (result) {
          setCars(result);
          return;
        }
      } catch (error) {
        throw new Error(`😢Sorry, it is error. Your error 👉 ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCars();
  }, []);

  const clickBtnLoadMoreHandler = () => {
    setPage((pervState) => pervState + 1);
  };

  const selectedCarsByMark = (selectedMark: Mark) => {
    setFilterByMark(selectedMark);
  };

  const filtersCars = (cars: Cars, filterByMark: Mark) => {
    let filteredCars = [...cars];

    if (filterByMark !== undefined) {
      const normalizeFilterByMark = filterByMark.toLowerCase();

      filteredCars = filteredCars.filter((car) =>
        car.make.toLowerCase().includes(normalizeFilterByMark)
      );
    }

    return filteredCars;
  };

  const visibleCars = filtersCars(cars, filterByMark);

  return (
    <>
      <Selects cars={cars} selectedCarsByMark={selectedCarsByMark} />
      <ListContainer>
        {isLoading && <div>LOADING...</div>}
        {visibleCars.map((car, idx) => (
          <Card key={idx} car={car} />
        ))}
        {page < 4 && (
          <LoadBtn type="button" onClick={clickBtnLoadMoreHandler}>
            Load more
          </LoadBtn>
        )}
      </ListContainer>
    </>
  );
}

export default CardList;
