import styled from "styled-components";

export const TopSection = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Hero = styled.section`
  width: 100%;
  background-image: url("https://car-images.bauersecure.com/wp-images/12824/xc90_100.jpg");
`;

export const TopImg = styled.img`
  width: 400px;
  height: 300px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled.span`
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

export const Text = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #121417;
  font-family: "Manrope";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
