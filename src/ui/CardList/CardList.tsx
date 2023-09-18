import { useState, useEffect } from "react";
import { getCars } from "../../services/api";
import Card from "../Card/Card";
import { Cars } from "./CardList.types";
import { ListContainer, LoadBtn } from "./CardList.styled";
import Selects from "../../components/Selects/Selects";

function CardList() {
  const [cars, setCars] = useState<Cars | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCars = async (page: number) => {
      try {
        setIsLoading(true);
        const result = await getCars(page);
        if (page === 1) {
          setCars(result);
          return;
        }
        if (page !== 1) {
          setCars((pervState) => [...pervState, ...result]);
        }
      } catch (error) {
        throw new Error(`😢Sorry, it is error. Your error 👉 ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCars(page);
  }, [page]);

  const clickBtnLoadMoreHandler = () => {
    setPage((pervState) => pervState + 1);
  };

  return (
    <>
      <Selects />
      <ListContainer>
        {isLoading && <div>LOADING...</div>}
        {cars.map((car, idx) => (
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
