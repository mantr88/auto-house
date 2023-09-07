import { useState, useEffect } from "react";
import { getCars } from "../../services/api";
import Card from "../Card/Card";
import { Cars } from "./CardList.types";
import { ListContainer } from "./CardList.styled";

function CardList() {
  const [cars, setCars] = useState<Cars | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setIsLoading(true);
        const result = await getCars();
        if (result) {
          setCars(result);
        }
      } catch (error) {
        throw new Error(`😢Sorry, it is error. Your error 👉 ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCars();
  }, []);

  return (
    <ListContainer>
      {isLoading && <div>LOADING...</div>}
      {cars && (
        <>
          {cars.map((car) => (
            <Card car={car} />
          ))}
        </>
      )}
    </ListContainer>
  );
}

export default CardList;
