import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  min-width: 350px;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-flow: row wrap;
  @media (min-width: 768px) {
    width: auto;
    max-width: 1200px;
    gap: 20px;
  }
`;

export const Category = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const Text = styled.p`
  text-align: justify;
  font-size: 14px;
  padding: 0 10px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
export const Item = styled.li`
  font-size: 13px;
  padding: 0 10px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Created = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Contact = styled.div`
  padding-right: 10px;
  display: flex;
  gap: 5px;
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
  @media (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export const LinkIcon = styled(Link)`
  text-decoration: none;
`;
