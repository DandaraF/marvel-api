import * as S from "./styles";

const Description = ({ image, title, description }) => {
  return (
    <S.Container>
      <S.Card>
        <S.Img src={image} alt={title} />
        <S.ContainerTitle>
          <S.Title>Name:</S.Title>
          <S.Text> {title}</S.Text>
          <S.Title>Description:</S.Title>
          <S.Text> {description}</S.Text>
        </S.ContainerTitle>
      </S.Card>
    </S.Container>
  );
};

export default Description;
