import * as S from "./styles";

const Button = ({
  width,
  height,
  type,
  value,
  img,
  altImg,
  textButton,
  onClick,
  ...other
}) => {
  return (
    <S.Container>
      <S.Button
        width={width}
        height={height}
        type={type || "submit"}
        value={value}
        onClick={onClick}
        {...other}
      >
        {textButton}
        <S.Img src={img} alt={altImg} />
      </S.Button>
    </S.Container>
  );
};

export default Button;
