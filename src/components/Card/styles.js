import styled from "styled-components";

export const Container = styled.div`
  margin: 10px 0;
`;

export const Card = styled.div`
  padding: 0 4px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 170px;
  height: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.text.light.primary};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  @media (min-width: 768px) {
    width: 190px;
    :hover {
      -webkit-transform: scale(1.1);
      -webkit-transition: -webkit-transform 0.5s ease;
      transition: transform 0.5s ease;
      transform: scale(1.1);
    }
  }
`;

export const Img = styled.img`
  width: 170px;
  height: 220px;
  border-radius: 4px 4px 0 0;
  @media (min-width: 768px) {
    width: 190px;
    height: 240px;
  }
`;

export const Title = styled.h1`
  font-size: ${(props) => props.fontSize || "13px"};
  text-align: center;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  @media (min-width: 768px) {
    min-height: 54px;
  }
`;
