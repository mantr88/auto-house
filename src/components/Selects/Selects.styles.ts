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

export const FormInputFrom = styled.input`
  padding: 14px 93px 14px 24px;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-style: none;
  background: #f7f7fb;
`;

export const FormInputTo = styled.input`
  padding: 14px 93px 14px 24px;
  border-radius: 0px 14px 14px 0px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-style: none;
  background: #f7f7fb;
`;
