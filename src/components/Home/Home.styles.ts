import styled from "styled-components";

export const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  margin-bottom: 28px;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url("https://car-images.bauersecure.com/wp-images/12824/xc90_100.jpg");
`;
export const TextContainer = styled.div`
  position: absolute;
  top: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;
  color: #fff;
`;
export const HeroTitle = styled.h1`
  font-size: 65px;
  font-weight: 700;
`;

export const HeroText = styled.p`
  width: 768px;
  font-weight: 600;
  font-size: 35px;
`;

export const DescriptionSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-bottom: 28px;
`;
export const TopImg = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
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
  gap: 30px;
`;

export const AdvItem = styled.li`
  width: 245px;
  min-height: 252px;
  box-shadow: 0px 3px 10px 5px rgba(79, 79, 111, 0.15);
  padding: 32px 15px 0;
  margin-bottom: 30px;
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

export const GoLink = styled.a`
  display: block;
  width: 274px;
  height: 44px;
  margin-left: auto;
  margin-right: auto;
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
