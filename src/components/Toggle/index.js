import * as S from "./styles";
import { menu } from "../../assets/img";

const Toggle = ({ onClose }) => {
  return (
    <S.Container>
      <S.Toggle onClick={onClose}>
        <S.Img src={menu} alt="menu" />
      </S.Toggle>
    </S.Container>
  );
};

export default Toggle;
