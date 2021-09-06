import * as S from "./styles";

const Input = ({
  value,
  event,
  width,
  height,
  bgColor,
  placeholder,
  colorPlaceHolder,
  onKeyUp,
  ...other
}) => {
  return (
    <S.Container>
      <S.Input
        value={value}
        onChange={event}
        width={width}
        height={height}
        bgColor={bgColor}
        placeholder={placeholder}
        colorPlaceHolder={colorPlaceHolder}
        onKeyUp={onKeyUp}
        {...other}
      />
    </S.Container>
  );
};

export default Input;
