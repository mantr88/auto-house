import { useState, useEffect } from "react";
import CardList from "../ui/CardList/CardList";
import { Cars } from "../ui/CardList/CardList.types";
import { getCars } from "../services/api";

function Catalog() {
  const [cars, setCars] = useState<Cars | []>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <main>
      <CardList cars={cars} isLoading={isLoading} />
    </main>
  );
}

export default Catalog;
