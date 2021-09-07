import styled from "styled-components";

export const Container = styled.div``;

export const Button = styled.button`
  width: ${(props) => props.width || "40px"};
  height: ${(props) => props.height || "24px"};
  background-color: ${({ theme }) => theme.palette.background.input};
  border-style: none;
  cursor: pointer;
  border-radius: 2px;
`;

export const Img = styled.img`
  width: 14px;
  height: 14px;
`;
