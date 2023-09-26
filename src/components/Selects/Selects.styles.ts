import styled from "styled-components";

export const SelectsWrap = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 18px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;
export const SelectBlocWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const SelectBlocTitle = styled.p`
  margin-bottom: 8px;
  color: ${(p) => p.theme.colors.paleTextFilter};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const FormInput = styled.input`
  margin-bottom: 18px;
  border-radius: 14px;
  background: ${(p) => p.theme.colors.filterBg};
  border-color: transparent;

  color: ${(p) => p.theme.colors.darkText};
  font-size: 18px;
  font-weight: 500;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${(p) => p.theme.colors.darkText};
    font-family: Manrope;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }

  &#startMileage {
    width: 130px;
    height: 48px;
    padding: 14px 24px 14px 24px;

    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);

    @media screen and (min-width: 480px) {
      width: 160px;
    }
  }

  &#endMileage {
    width: 130px;
    height: 48px;
    padding: 14px 24px 14px 24px;

    border-radius: 0px 14px 14px 0px;

    @media screen and (min-width: 480px) {
      width: 160px;
    }
  }
`;

export const SearchButton = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border-color: transparent;
  background: ${(p) => p.theme.colors.main};

  color: ${(p) => p.theme.colors.whiteText};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  @media screen and (min-width: 480px) {
    margin-left: 18px;
  }

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hover};
  }
`;
