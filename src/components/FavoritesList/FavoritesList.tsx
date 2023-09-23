import { useEffect, useState } from "react";
import { Cars } from "../../ui/CardList/CardList.types";
import NotFound from "../../ui/Not Found/NotFound";
import CardList from "../../ui/CardList/CardList";

function FavoritesList() {
  const [cars, setCars] = useState<Cars | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      const favoritesItems: string | null = localStorage.getItem(
        "favoriteCars"
      ) as string;
      const favoritesItemsParse = JSON.parse(favoritesItems);
      if (favoritesItemsParse) {
        setCars((prevState) => [...prevState, ...favoritesItemsParse]);
      }
    } catch (error) {
      throw new Error(`😢Sorry, it is error. Your error 👉 ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <main>
      {cars.length === 0 && <NotFound />}
      <CardList cars={cars} isLoading={isLoading} />
    </main>
  );
}

export default FavoritesList;
