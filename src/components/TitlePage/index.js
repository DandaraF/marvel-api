import * as S from "./styles";

const TitlePage = ({ children }) => {
  return (
    <S.ContentTitle>
      <S.Title>{children}</S.Title>
      <S.Hr />
    </S.ContentTitle>
  );
};

export default TitlePage;
