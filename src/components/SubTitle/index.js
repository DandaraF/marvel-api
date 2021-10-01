import * as S from "./styles";

const TitlePage = ({ children }) => {
  return (
    <S.Content>
      <S.SubTitle>{children}</S.SubTitle>
      <S.Hr />
    </S.Content>
  );
};

export default TitlePage;
