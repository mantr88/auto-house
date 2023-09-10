import { Car } from "../CardList/CardList.types";
import {
  AccentText,
  CarTitle,
  RentalLink,
  CarImg,
  InfoCarWrapper,
  CarСharacteristics,
  CrossWrap,
  СharItems,
  Description,
  DescriptionText,
  Accessories,
  Conditions,
  ConditionsItemsWrap,
  ConditionsItems,
  AcceptConditions,
} from "./CarInfoModal.styled";

import Cross from "../Icons/Cross";

interface CardProps {
  car: Car;
  closeModal: () => void;
}

function CarInfoModal({ car, closeModal }: CardProps) {
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
    fuelConsumption,
    engineSize,
    description,
    functionalities,
  } = car;

  function formatNumberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const formattedMileage = formatNumberWithCommas(mileage);

  const city = address.split(", ")[1];
  const country = address.split(", ")[2];
  const completeSet = [...accessories, ...functionalities];
  return (
    <InfoCarWrapper>
      <CrossWrap onClick={closeModal()}>
        <Cross />
      </CrossWrap>
      <CarImg src={img} alt={model} />
      <CarTitle>
        <p>
          {make} <AccentText>{model}, </AccentText>
          {year}
        </p>
      </CarTitle>
      <CarСharacteristics>
        <СharItems>{city}</СharItems>
        <СharItems>{country}</СharItems>
        <СharItems>Id: {id}</СharItems>
        <СharItems>Year: {year}</СharItems>
        <СharItems>Type: {type}</СharItems>
        <СharItems>Fuel Consumption: {fuelConsumption}</СharItems>
        <СharItems>Engine Size: {engineSize}</СharItems>
      </CarСharacteristics>
      <Description>
        <DescriptionText>{description}</DescriptionText>
        <Accessories>Accessories and functionalities:</Accessories>
        <CarСharacteristics>
          {completeSet.map((el) => (
            <СharItems>{el}</СharItems>
          ))}
        </CarСharacteristics>
        <Conditions>Rental Conditions:</Conditions>
      </Description>
      <ConditionsItemsWrap>
        <ConditionsItems>
          Minimum age : <AcceptConditions>25</AcceptConditions>
        </ConditionsItems>
        <ConditionsItems>Valid driver’s license</ConditionsItems>
      </ConditionsItemsWrap>
      <ConditionsItemsWrap>
        <ConditionsItems>Security deposite required </ConditionsItems>
        <ConditionsItems>
          Mileage: <AcceptConditions>{formattedMileage}</AcceptConditions>
        </ConditionsItems>
        <ConditionsItems>
          Price: <AcceptConditions>{rentalPrice}</AcceptConditions>
        </ConditionsItems>
      </ConditionsItemsWrap>
      <RentalLink href="tel:+380730000000">Rental car</RentalLink>
    </InfoCarWrapper>
  );
}

export default CarInfoModal;
