import styled from "styled-components";

export const CardItem = styled.li`
  margin: 14.5px;
  height: 426px;
  width: 100%;
  display: flex;
  flex-direction: column;

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
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
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
  z-index: 2;
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
  font-family: "Manrope";
  font-size: 16px;
  font-style: normal;
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

export const CardBtn = styled.button`
  width: 100%;
  height: 44px;
  padding: 12px 99px;
  border: none;
  border-radius: 12px;
  background: rgba(52, 112, 255, 1);

  color: #fff;
  font-family: "Manrope";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  &:hover,
  &:focus {
    background: rgba(11, 68, 205, 1);
  }
`;
