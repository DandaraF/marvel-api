import styled from "styled-components";

export const Container = styled.div``;

export const Button = styled.button`
  width: ${(props) => props.width || "40px"};
  height: ${(props) => props.height || "24px"};
  background-color: ${(props) =>
    props.bgColor || props.theme.palette.background.input};
  border-style: none;
  cursor: pointer;
  border-radius: 2px;
`;

export const Img = styled.img`
  width: 14px;
  height: 14px;
  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.color || props.theme.palette.text.primary};
  font-size: ${(props) => props.fontSize || "14px"};
  @media (min-width: 768px) {
    font-size: ${(props) => props.fontDesktop || "18px"};
  }
`;
