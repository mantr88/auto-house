import styled from "styled-components";

export const SelectsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 50px;
`;
export const SelectBlocWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const SelectBlocTitle = styled.p`
  margin-bottom: 8px;
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const FormInput = styled.input`
  /* display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px; */

  border-radius: 14px;
  background: #f7f7fb;
  border-color: transparent;

  color: #121417;
  font-size: 18px;
  font-weight: 500;

  &#startMileage {
    width: 160px;
    height: 48px;
    padding: 14px 24px 14px 24px;

    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    background: #f7f7fb;
  }

  &#endMileage {
    width: 160px;
    height: 48px;
    padding: 14px 24px 14px 24px;

    border-radius: 0px 14px 14px 0px;
    background: #f7f7fb;
  }
`;

export const SearchButton = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  margin-left: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border-color: transparent;
  background: #3470ff;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
