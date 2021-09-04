import * as S from "./styles";

const Card = ({ image, title }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Img src={image} alt={title} />
        <S.Title>{title}</S.Title>
      </S.Content>
    </S.Container>
  );
};

export default Card;
