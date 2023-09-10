import styled from "styled-components";

export const InfoCarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 24px;
`;

export const CrossWrap = styled.div`
  position: absolute;
  top: 3%;
  left: 93%;
`;

export const CarImg = styled.img`
  height: 268px;
  margin-bottom: 14px;
  object-fit: cover;
  border-radius: 14px;
`;

export const CarTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #121417;
  font-family: "Manrope";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const AccentText = styled.span`
  color: #3470ff;
`;

export const CarСharacteristics = styled.div`
  margin-bottom: 14px;
  color: rgba(18, 20, 23, 0.5);
  font-family: "Manrope";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  span:not(:last-child)::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    margin-left: 6px;
    vertical-align: middle;
  }
`;

export const СharItems = styled.span`
  margin-bottom: 5px;
`;

export const Description = styled.div`
  color: #121417;
  font-family: "Manrope";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const DescriptionText = styled.p`
  margin-bottom: 24px;
`;

export const Accessories = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Conditions = styled.p`
  margin-bottom: 15px;
  font-weight: 500;
`;

export const ConditionsItemsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  color: #363535;
  font-family: "Montserrat";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

export const ConditionsItems = styled.p`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const AcceptConditions = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;
export const RentalLink = styled.a`
  width: 168px;
  margin-top: 24px;
  padding: 12px 50px;
  border: none;
  border-radius: 12px;
  background: #3470ff;

  color: #fff;
  font-family: "Manrope";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  &:hover,
  &:focus {
    box-shadow: 2px 2px 4px 3px #709aff;
  }
`;
