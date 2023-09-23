import styled from "styled-components";

export const InfoCarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 40px;
  border-radius: 24px;

  @media screen and (max-width: 480px) {
    padding: 26px;
    align-items: center;
  }
`;

export const CrossBtn = styled.button`
  position: absolute;
  top: 2%;
  left: 92%;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    top: 1%;
    left: 91%;
  }
  @media screen and (max-width: 320px) {
    top: 0.5%;
    left: 89%;
  }
`;

export const CarImg = styled.img`
  width: 100%;
  height: 218px;
  margin-bottom: 14px;
  object-fit: cover;
  border-radius: 14px;

  @media screen and (min-width: 480px) {
    height: 268px;
  }
`;

export const CarTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: ${(p) => p.theme.colors.darkText};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const AccentText = styled.span`
  color: ${(p) => p.theme.colors.main};
`;

export const CarСharacteristics = styled.div`
  margin-bottom: 14px;
  color: ${(p) => p.theme.colors.paleTextCard};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  span:not(:last-child)::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: ${(p) => p.theme.colors.divider};
    margin-right: 6px;
    margin-left: 6px;
    vertical-align: middle;
  }
`;

export const СharItems = styled.span`
  margin-bottom: 5px;
`;

export const Description = styled.div`
  color: ${(p) => p.theme.colors.darkText};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
`;
export const DescriptionText = styled.p`
  margin-bottom: 8px;

  @media screen and (min-width: 480px) {
    margin-bottom: 24px;
  }
`;

export const Accessories = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Conditions = styled.p`
  margin-bottom: 8px;
  font-weight: 500;

  @media screen and (min-width: 480px) {
    margin-bottom: 16px;
  }
`;

export const ConditionsItemsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  color: ${(p) => p.theme.colors.conditionsText};
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const ConditionsItems = styled.p`
  padding: 7px 14px;
  border-radius: 35px;
  background: ${(p) => p.theme.colors.conditionsBg};
`;

export const AcceptConditions = styled.span`
  color: ${(p) => p.theme.colors.main};
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;
export const RentalLink = styled.a`
  width: 168px;
  margin-top: 12px;
  padding: 12px 50px;
  border: none;
  border-radius: 12px;
  background: ${(p) => p.theme.colors.main};

  color: ${(p) => p.theme.colors.whiteText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;

  @media screen and (min-width: 480px) {
    margin-top: 24px;
  }

  &:hover,
  &:focus {
    background: ${(p) => p.theme.colors.hover};
  }
`;
