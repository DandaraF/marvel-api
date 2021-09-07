import * as S from "./styles";

const Card = ({ image, title, onClick }) => {
  return (
    <S.Container>
      <S.Card onClick={onClick}>
        <S.Img src={image} alt={title} />
        <S.Title>{title}</S.Title>
      </S.Card>
    </S.Container>
  );
};

export default Card;
