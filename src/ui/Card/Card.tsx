import { useState } from "react";
import CarInfoModal from "../CarInfoModal/CarInfoModal";
import { Car } from "../CardList/CardList.types";
import PopupWindow from "../PopupWondow/PopupWondow";
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
  const [active, setActive] = useState(true);

  // const handlerOverlayClic = (e) => {};

  return (
    <CardItem key={car.id}>
      <CardWrapper>
        <CardImg src={car.img} alt={car.model} />
        <CarName>
          {car.make}
          <span>{car.model}</span>
        </CarName>
        <CardBtn onClick={() => setActive(true)}>Learn More</CardBtn>
      </CardWrapper>
      {active && (
        <PopupWindow active={active} setActive={setActive}>
          {<CarInfoModal />}
        </PopupWindow>
      )}
    </CardItem>
  );
}

export default Card;
