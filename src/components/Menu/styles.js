import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  @media (max-width: 767px) {
    position: fixed;
    opacity: 0;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    top: 0;
    transition: opacity 0.5s;
    z-index: 2;
    ${(props) =>
      props.show &&
      css`
        opacity: 1;
        pointer-events: auto;
      `};
  }
`;

export const Container = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  gap: 20px;
  top: 0;
  right: -140px;
  width: 140px;
  height: 100vh;
  z-index: 7;
  transform: translateX(${(props) => (props.show ? "-100%" : "0")});
  transition: transform 0.8s;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.background.header};
  @media (min-width: 768px) {
    transition: none;
    transform: translateX(0);
    right: 0;
    padding-top: 0;
    position: unset;
    width: auto;
    height: 100%;
    margin: 10px 0 0;
    border-top: 1px solid ${({ theme }) => theme.palette.background.input};
  }
`;
export const IconMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 26px 10px 8px 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 0;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
  }
`;

export const ItemMenu = styled(Link)`
  border-top: 1px solid ${({ theme }) => theme.palette.background.input};
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  font-size: 13px;
  color: ${({ theme }) => theme.palette.text.primary};
  @media (min-width: 768px) {
    border: 0;
    padding: 10px 20px;
    font-size: 17px;
    gap: 8px;
    :hover {
      background-color: rgba(238, 23, 31, 0.88);
      transition: 500ms all;
    }
  }
`;

export const Hr = styled.div`
  height: 1px;
  border-top: 1px solid ${({ theme }) => theme.palette.background.input};
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 14px;
  height: 15px;
  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;
