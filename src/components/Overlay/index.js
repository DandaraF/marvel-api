import * as S from "./styles";

const Overlay = ({ id = "modal", children, onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  return (
    <S.Container id="modal" onClick={handleOutsideClick}>
      {children}
    </S.Container>
  );
};

export default Overlay;
