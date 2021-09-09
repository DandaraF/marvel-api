import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 5px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.header};
  @media (min-width: 768px) {
    padding: 20px 10px;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const Logo = styled.img`
  width: 100px;
  @media (min-width: 768px) {
    width: 120px;
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (min-width: 768px) {
    gap: 10px;
  }
`;

export const ContentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 10px;
  }
`;

export const TextContact = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.primary};
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Strong = styled.strong`
  background-color: ${({ theme }) => theme.palette.text.dark.secondary};
  color: ${({ theme }) => theme.palette.background.default};
  padding: 0 2px;
  margin-left: 2px;
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 23px;
    height: 23px;
  }
`;
export const IconLikedin = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
