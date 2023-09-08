import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
  height: 200px;
  width: 200px;
`;
