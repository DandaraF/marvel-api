import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const Card = styled.div`
  padding: 4px;
  display: flex;
  align-items: flex-start;
  gap: 6px;
  width: 95%;
  text-align: justify;
  height: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.text.light.primary};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    width: 100%;
    min-width: 768px;
    padding: 10px;
    gap: 15px;
  }
`;

export const Img = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 4px;
  @media (min-width: 768px) {
    width: 210px;
    height: 280px;
  }
`;
export const ContainerType = styled.div`
  width: 100%;
  display: flex;
  color: ${(props) => props.theme.palette.button.primary};
  font-weight: 700;

  align-items: center;
  font-size: ${(props) => props.fontSize || "13px"};
  @media (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
`;
export const ImgType = styled.img`
  width: ${(props) => props.width || "50px"};
`;

export const Title = styled.h1`
  font-size: ${(props) => props.fontSize || "13px"};
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 40px;
  @media (min-width: 768px) {
    gap: 5px;
  }
`;

export const Text = styled.p`
  font-size: 13px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
