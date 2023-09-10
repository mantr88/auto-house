import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -14.5px;
`;
export const LoadBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  color: rgba(52, 112, 255, 1);
  font-family: "Manrope";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;

  border: none;
  background-color: #fff;

  &:hover,
  &:focus {
    color: rgba(11, 68, 205, 1);
  }
`;
