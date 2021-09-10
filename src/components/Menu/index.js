import * as S from "./styles";
import { groot, batman, movie, tv } from "../../assets/img";

const Menu = () => {
  return (
    <S.Container>
      <S.Menu>
        <S.ItemMenu>
          <S.Img src={groot} alt="Groot" />
          CHARACTERS
        </S.ItemMenu>
        <S.ItemMenu>
          <S.Img src={batman} alt="batman" />
          COMICS
        </S.ItemMenu>
        <S.ItemMenu>
          <S.Img src={movie} alt="movie" />
          MOVIES
        </S.ItemMenu>
        <S.ItemMenu>
          <S.Img src={tv} alt="tv" />
          TV SHOWS
        </S.ItemMenu>
      </S.Menu>
    </S.Container>
  );
};

export default Menu;
