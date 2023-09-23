import styled from "styled-components";
import { NavLink as RentLink } from "react-router-dom";

export const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  margin-bottom: 28px;
  border-radius: 14px;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/GLA/10849/1690447163011/front-left-side-47.jpg?impolicy=resize&imwidth=480");

  @media screen and (min-width: 480px) {
    height: 100vh;
    background-image: linear-gradient(
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url("https://car-images.bauersecure.com/wp-images/12824/xc90_100.jpg");
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 10%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 10px;
  color: #fff;

  @media screen and (min-width: 480px) {
    top: 40%;
    margin-left: 20px;
  }
`;
export const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    font-weight: 700;
  }
`;

export const HeroText = styled.p`
  font-weight: 500;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 28px;
  }

  @media screen and (min-width: 1200px) {
    width: 768px;
    font-weight: 600;
    font-size: 36px;
  }
`;

export const DescriptionSection = styled.section`
  margin-bottom: 28px;

  @media screen and (min-width: 480px) {
    display: flex;
    flex-direction: row;
  }
`;

export const TopImg = styled.img`
  width: 400px;
  height: 300px;
  margin-bottom: 16px;
  object-fit: cover;
  border-radius: 14px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
  color: #121417;
  font-family: "Manrope";
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #121417;
  font-family: "Manrope";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`;

export const Advantages = styled.section`
  text-align: center;
  margin-bottom: 28px;
`;

export const AdvTitle = styled.h2`
  margin-bottom: 24px;
  color: #121417;
  font-family: "Manrope";
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const AdvList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
`;

export const AdvItem = styled.li`
  width: 245px;
  min-height: 252px;
  box-shadow: 0px 3px 10px 5px rgba(79, 79, 111, 0.15);
  padding: 32px 15px 0;
  border-radius: 14px;
`;

export const ItemTitle = styled.h3`
  margin-top: 8px;
  color: #121417;
  font-family: "Manrope";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

export const ItemText = styled.p`
  margin-top: 8px;
  color: #121417;
  font-family: "Manrope";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const GoLink = styled(RentLink)`
  display: block;
  width: 274px;
  height: 44px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 38px;
  padding: 12px 99px;
  border: none;
  border-radius: 12px;
  background: rgba(52, 112, 255, 1);

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  &:hover,
  &:focus {
    background: rgba(11, 68, 205, 1);
  }
`;
