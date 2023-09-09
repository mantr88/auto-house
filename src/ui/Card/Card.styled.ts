import styled from "styled-components";

export const CardItem = styled.li`
  /* display: flex;
  margin: -14.5px;
  
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3333%;
  } */
  margin: 14.5px;
  width: 274px;
  height: 426px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 2 * 30px) / 2);
  }

  @media screen and (min-width: 1200px) {
    width: calc((100% - 3 * 30px) / 3);
  }
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  /* border: 2px solid tomato; */
`;

export const CardWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 0.25rem;
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
  top: 4%;
  left: 92%;
  z-index: 1;
  width: 18px;
  height: 18px;
`;

export const CrossWrap = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
`;

export const CardImg = styled.img`
  height: 267px;
  max-width: 100%;
  margin-bottom: 14px;
  /* vertical-align: middle; */
  object-fit: cover;

  border-radius: 14px;
  /* filter: contrast(70%); */
  //filter: saturate(180%);
  /* overflow: hidden; */
  /* position: relative; */
  /* transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%; // 16:9 aspect ratio
  } */
  /* @media (min-width: 40rem) {
    &::before {
      padding-top: 66.6%; // 3:2 aspect ratio
    } */
  /* } */
`;

export const CarTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const CarСharacteristics = styled.div`
  margin-bottom: 28px;
`;

export const CardBtn = styled.button`
  width: 100%;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  background: #3470ff;

  color: #fff;
`;
