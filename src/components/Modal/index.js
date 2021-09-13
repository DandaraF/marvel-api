import Overlay from "../Overlay";
import * as S from "./styles";
import { close } from "../../assets/img";

const Modal = ({ onClose = () => {}, img, title, description }) => {
  return (
    <Overlay onClose={onClose}>
      <S.Container>
        <S.BarTop>
          <S.Button onClick={onClose}>
            <S.Icon src={close} alt="Fechar janela" />
          </S.Button>
        </S.BarTop>
        <S.Content>
          <S.Img src={img} alt={title} />
          <S.ContentCard>
            <S.Title>Name:</S.Title>
            <S.Text> {title}</S.Text>
            <S.Title>Description:</S.Title>
            <S.Text> {description}</S.Text>
          </S.ContentCard>
        </S.Content>
      </S.Container>
    </Overlay>
  );
};

export default Modal;
