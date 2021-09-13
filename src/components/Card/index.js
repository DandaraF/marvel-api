import * as S from "./styles";

const Card = ({ image, title, onClick }) => {
  return (
    <S.Container>
      <S.Card onClick={onClick}>
        <S.Img src={image} alt={title} />
        <S.ContainerTitle>
          <S.Title>{title}</S.Title>
        </S.ContainerTitle>
      </S.Card>
    </S.Container>
  );
};

export default Card;
