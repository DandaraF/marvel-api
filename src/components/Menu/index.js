import Toggle from "../Toggle";
import { groot, batman, movie, tv } from "../../assets/img";
import * as S from "./styles";

const Menu = ({ onClose = () => {}, show }) => {
  return (
    <S.Overlay show={show} onClick={onClose}>
      <S.Container show={show} onClick={(e) => e.stopPropagation()}>
        <S.IconMenu>
          <Toggle onClose={onClose} />
        </S.IconMenu>
        <S.Menu>
          <S.ItemMenu to="/Characters">
            <S.Img src={groot} alt="Groot" />
            CHARACTERS
          </S.ItemMenu>
          <S.ItemMenu to="/Comics">
            <S.Img src={batman} alt="batman" />
            COMICS
          </S.ItemMenu>
          {/* <S.ItemMenu>
            <S.Img src={movie} alt="movie" />
            MOVIES
          </S.ItemMenu>
          <S.ItemMenu>
            <S.Img src={tv} alt="tv" />
            TV SHOWS
          </S.ItemMenu> */}
          <S.Hr />
        </S.Menu>
      </S.Container>
    </S.Overlay>
  );
};

export default Menu;
