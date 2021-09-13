import styled from "styled-components";

export const Container = styled.div`
  margin: 10px 0;
`;

export const Input = styled.input`
  width: ${(props) => props.width || "120px"};
  height: ${(props) => props.height || "24px"};
  color: ${(props) => props.color || props.theme.palette.text.primary};
  background-color: ${(props) =>
    props.bgColor || props.theme.palette.background.default};
  border: 1px solid ${({ theme }) => theme.palette.background.input};
  padding-left: 6px;
  border-radius: 2px;
  font-size: 10px;
  @media (min-width: 768px) {
    width: ${(props) => props.desktopWidth || "200px"};
    height: ${(props) => props.desktopHeight || "35px"};
    font-size: 14px;
    ::placeholder {
      color: ${(props) =>
        props.colorPlacerHolder || props.theme.palette.placeholder.primary};
    }
    :focus {
      outline: none;
      width: ${(props) => props.focusWidth || "300px"};
      border-color: ${({ theme }) => theme.palette.button.primary};
      box-shadow: 0 0 1px ${({ theme }) => theme.palette.button.primary};
    }
  }
`;
