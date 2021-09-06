import * as S from "./styles";

const Card = ({ image, title }) => {
  return (
    <S.Container>
      <S.Card>
        <S.Img src={image} alt={title} />
        <S.Title>{title}</S.Title>
      </S.Card>
    </S.Container>
  );
};

export default Card;
