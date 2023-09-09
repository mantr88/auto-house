import { useState } from "react";
import CarInfoModal from "../CarInfoModal/CarInfoModal";
import { Car } from "../CardList/CardList.types";
import PopupWindow from "../PopupWondow/PopupWondow";
import {
  CarTitle,
  CardBtn,
  CardImg,
  CardItem,
  CardWrapper,
  CarСharacteristics,
  CrossWrap,
  HeartWrap,
} from "./Card.styled";
import Cross from "../Icons/Cross";
import HeartIsFilled from "../Icons/HeartIsFilled";
import ClearHeart from "../Icons/ClearHeart";

interface CardProps {
  car: Car;
}

function Card({ car }: CardProps) {
  const [active, setActive] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const onClose = () => {
    () => setActive(false);
  };

  return (
    <CardItem key={car.id}>
      <CardWrapper>
        {active && (
          <CrossWrap>
            <Cross />
          </CrossWrap>
        )}
        <HeartWrap>{favorite ? <HeartIsFilled /> : <ClearHeart />}</HeartWrap>
        <CardImg src={car.img} alt={car.model} />
        <CarTitle>
          {car.make} <span>{car.model},</span>
          <span>{car.year}</span>
          <span>{car.rentalPrice}</span>
        </CarTitle>
        <CarСharacteristics>
          <span>{car.address}</span>
          <span>{car.rentalCompany}</span>
          <span>{car.type}</span>
          <span>{car.make}</span>
          <span>{car.mileage}</span>
          <span>{car.accessories[1]}</span>
        </CarСharacteristics>
        <CardBtn onClick={() => setActive(true)}>Learn More</CardBtn>
      </CardWrapper>
      {active && (
        <PopupWindow active={active} setActive={setActive}>
          <CarInfoModal />
        </PopupWindow>
      )}
    </CardItem>
  );
}

export default Card;
