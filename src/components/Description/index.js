import * as S from "./styles";

const Description = ({ image, title, description, type, typeImg, width }) => {
  return (
    <S.Container>
      <S.Card>
        <S.ContentImg>
          <S.Img src={image} alt={title} />
        </S.ContentImg>
        <S.ContainerTitle>
          <S.ContainerType>
            <S.ImgType src={typeImg} alt={type} width={width} />
            {type}
          </S.ContainerType>
          <S.Title>Name:</S.Title>
          <S.Text> {title}</S.Text>
          <S.Title>Description:</S.Title>
          {description ? (
            <S.Text> {description}</S.Text>
          ) : (
            <S.Text fontStyle="italic">Description not available.</S.Text>
          )}
        </S.ContainerTitle>
      </S.Card>
    </S.Container>
  );
};

export default Description;
