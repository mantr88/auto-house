import styled from "styled-components";

export const CardItem = styled.li`
  margin: 14.5px;
  display: flex;
  flex-direction: column;
  max-width: 425px;
  height: 426px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 2 * 29px) / 2);
  }

  @media screen and (min-width: 1200px) {
    width: calc((100% - 4 * 29px) / 4);
  }
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: "Manrope";
  overflow: hidden;
  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }
`;

export const HeartWrap = styled.div`
  position: absolute;
  top: 3%;
  left: 89%;
  width: 18px;
  height: 18px;
`;

export const CardImg = styled.img`
  height: 268px;
  margin-bottom: 14px;
  object-fit: cover;
  border-radius: 14px;
`;

export const CarTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-left: 10px;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const AccentText = styled.span`
  color: #3470ff;
`;

export const Price = styled.span`
  margin-left: 87px;
  padding-right: 10px;
`;

export const CarСharacteristics = styled.div`
  margin-bottom: 28px;
  padding-left: 10px;
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

export const CardBtn = styled.button`
  width: 100%;
  height: 44px;
  padding: 12px 99px;
  border: none;
  border-radius: 12px;
  background: ${(p) => p.theme.colors.main};

  color: ${(p) => p.theme.colors.whiteText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  &:focus {
    background: ${(p) => p.theme.colors.hover};
  }
`;
