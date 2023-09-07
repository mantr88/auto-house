import { Car } from "../CardList/CardList.types";
import { CarName, CardWrapper } from "./Card.styled";

interface CardProps {
  car: Car;
}

function Card({ car }: CardProps) {
  return (
    <CardWrapper>
      <img src={car.img} alt={car.model} />
      <CarName>
        {car.make}
        <span>{car.model}</span>
      </CarName>
    </CardWrapper>
  );
}

export default Card;
