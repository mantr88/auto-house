import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 2;
`;

export const Content = styled.div`
  border-radius: 12px;
  background-color: #fff;
  width: 541px;
  height: 752px;

  @media screen and (max-width: 480px) {
    width: 95%;
    height: 100vh;
  }
`;
