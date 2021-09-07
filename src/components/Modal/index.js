import * as S from "./styles";
import { close } from "../../assets/img";

const Modal = ({
  id = "modal",
  onClose = () => {},
  img,
  title,
  description,
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <S.Modal id={id} onClick={handleOutsideClick}>
      <S.Container>
        <S.BarTop>
          <S.Button onClick={onClose}>
            <S.Icon src={close} alt="Fechar janela" />
          </S.Button>
        </S.BarTop>
        <S.Content>
          <S.Img src={img} alt={title} />
          <S.ContentCard>
            <S.Title>{title}</S.Title>
            <S.Text>{description}</S.Text>
          </S.ContentCard>
        </S.Content>
      </S.Container>
    </S.Modal>
  );
};

export default Modal;
