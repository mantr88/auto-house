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
  HeartWrap,
  Price,
  СharItems,
} from "./Card.styled";
import HeartIsFilled from "../Icons/HeartIsFilled";
import ClearHeart from "../Icons/ClearHeart";

interface CardProps {
  car: Car;
}

function Card({ car }: CardProps) {
  const [active, setActive] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const onClose = () => {
    setActive(false);
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
    <CardItem>
      <CardWrapper>
        <HeartWrap>{favorite ? <HeartIsFilled /> : <ClearHeart />}</HeartWrap>
        <CardImg src={img} alt={model} />
        <CarTitle>
          <p>
            {make} <AccentText>{model}, </AccentText>
            {year}
          </p>

          <Price>{rentalPrice}</Price>
        </CarTitle>
        <CarСharacteristics>
          <СharItems>{city}</СharItems>
          <СharItems>{country}</СharItems>
          <СharItems>{rentalCompany}</СharItems>
          <СharItems>{type}</СharItems>
          <СharItems>{model}</СharItems>
          <СharItems>{mileage}</СharItems>
          <СharItems>{accessories[1]}</СharItems>
        </CarСharacteristics>
        <CardBtn onClick={() => setActive(true)}>Learn More</CardBtn>
      </CardWrapper>
      {active && (
        <PopupWindow active={active} setActive={setActive}>
          <CarInfoModal car={car} closeModal={onClose} />
        </PopupWindow>
      )}
    </CardItem>
  );
}

export default Card;
