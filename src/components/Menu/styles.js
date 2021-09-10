import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px 0 0;
`;

export const Menu = styled.div`
  display: flex;
  width: 110px;
  padding: 10px 10px;
  gap: 10px;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 0;
    width: 100%;
    padding: 10px 0 0;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
  }
`;

export const ItemMenu = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  font-size: 13px;
  color: ${({ theme }) => theme.palette.text.primary};
  @media (min-width: 768px) {
    padding: 10px 20px;
    font-size: 18px;
    gap: 8px;
    :hover {
      background-color: rgba(238, 23, 31, 0.88);
      transition: 500ms all;
    }
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
