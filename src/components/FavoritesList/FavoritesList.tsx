import { useEffect, useState } from "react";
import { Cars } from "../../ui/CardList/CardList.types";
import Card from "../../ui/Card/Card";
import { ListContainer } from "../../ui/CardList/CardList.styled";

function FavoritesList() {
  const [cars, setCars] = useState<Cars | []>([]);
  useEffect(() => {
    const favoritesItems: string | null = localStorage.getItem(
      "favoriteCars"
    ) as string;
    const favoritesItemsParse = JSON.parse(favoritesItems);
    if (favoritesItemsParse) {
      setCars(favoritesItemsParse);
    }
  }, []);

  return (
    <ListContainer>
      {cars.map((car, idx) => (
        <Card key={idx} car={car}></Card>
      ))}
    </ListContainer>
  );
}

export default FavoritesList;
