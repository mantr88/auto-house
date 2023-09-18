import { useState, useEffect } from "react";
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
  const [isFavorite, setIsFavorite] = useState(false);

  const onClose = () => {
    document.body.style.overflow = "visible";
    setActive(false);
  };

  const {
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

  const favoriteClickHandlerBtn = () => {
    const favorites = JSON.parse(localStorage.getItem("favoriteCars") || "[]");

    if (!isFavorite) {
      favorites.push(car);
      localStorage.setItem("favoriteCars", JSON.stringify(favorites));
    } else {
      const updatedFavorites = favorites.filter(
        (favorite: Car) => favorite.id !== car.id
      );
      localStorage.setItem("favoriteCars", JSON.stringify(updatedFavorites));
    }

    setIsFavorite((prevState) => !prevState);
  };

  useEffect(() => {
    const checkIsFavorited = () => {
      const favorites = JSON.parse(
        localStorage.getItem("favoriteCars") || "[]"
      );
      const findedFavorites = favorites.find(
        (favorite: Car) => favorite.id === car.id
      );
      setIsFavorite(!!findedFavorites);
    };
    checkIsFavorited();
  }, [car.id]);

  return (
    <CardItem>
      <CardWrapper>
        <HeartWrap onClick={favoriteClickHandlerBtn}>
          {isFavorite ? <HeartIsFilled /> : <ClearHeart />}
        </HeartWrap>
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
        <PopupWindow setActive={setActive} active={active}>
          <CarInfoModal car={car} closeModal={onClose} />
        </PopupWindow>
      )}
    </CardItem>
  );
}

export default Card;
