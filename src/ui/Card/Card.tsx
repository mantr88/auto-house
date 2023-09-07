import { Car } from "../CardList/CardList.types";
import {
  CarName,
  CardBtn,
  CardImg,
  CardItem,
  CardWrapper,
} from "./Card.styled";

interface CardProps {
  car: Car;
}

function Card({ car }: CardProps) {
  return (
    <CardItem key={car.id}>
      <CardWrapper>
        <CardImg src={car.img} alt={car.model} />
        <CarName>
          {car.make}
          <span>{car.model}</span>
        </CarName>
        <CardBtn>Learn More</CardBtn>
      </CardWrapper>
    </CardItem>
  );
}

export default Card;
