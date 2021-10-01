import * as S from "./styles";

const TitlePage = ({ fontSize, children }) => {
  return (
    <S.ContentTitle>
      <S.Title fontSize={fontSize}>{children}</S.Title>
      <S.Hr />
    </S.ContentTitle>
  );
};

export default TitlePage;
