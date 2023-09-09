import { useState } from "react";
import CarInfoModal from "../CarInfoModal/CarInfoModal";
import { Car } from "../CardList/CardList.types";
import PopupWindow from "../PopupWondow/PopupWondow";
import {
  AccentText,
  CarTitle,
  CardBtn,
  CardImg,
  CardItem,
  CardWrapper,
  CarСharacteristics,
  CrossWrap,
  HeartWrap,
  Price,
  СharItems,
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
  const {
    id,
    img,
    model,
    make,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
  } = car;

  const city = address.split(", ")[1];
  const country = address.split(", ")[2];
  return (
    <CardItem key={id}>
      <CardWrapper>
        {active && (
          <CrossWrap>
            <Cross />
          </CrossWrap>
        )}
        <HeartWrap>{favorite ? <HeartIsFilled /> : <ClearHeart />}</HeartWrap>
        <CardImg src={img} alt={model} />
        <CarTitle>
          {make} <AccentText>{model}, </AccentText>
          {year}
          <Price>{rentalPrice}</Price>
        </CarTitle>
        <CarСharacteristics>
          <СharItems>{city}</СharItems>
          <СharItems>{country}</СharItems>
          <СharItems>{rentalCompany}</СharItems>
          <СharItems>{type}</СharItems>
          <СharItems>{make}</СharItems>
          <СharItems>{mileage}</СharItems>
          <СharItems>{accessories[1]}</СharItems>
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
