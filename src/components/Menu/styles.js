import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px 0 0;
`;

export const Menu = styled.div`
  display: flex;
  @media (min-width: 768px) {
    justify-content: center;
    gap: 30px;
  }
`;

export const ItemMenu = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  @media (min-width: 768px) {
    padding: 10px 20px;
    font-size: 18px;
    :hover {
      background-color: rgba(238, 23, 31, 0.88);
      transition: 500ms all;
    }
  }
`;
