import styled from "styled-components";

export const ListContainer = styled.ul`
  list-style: none;
  margin: -14.5px;

  @media screen and (min-width: 480px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const LoadBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  color: ${(p) => p.theme.colors.main};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;

  border: none;
  background-color: #fff;

  @media screen and (max-width: 480px) {
    margin-left: 33%;
    margin-right: 33%;
  }

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.hover};
  }
`;
