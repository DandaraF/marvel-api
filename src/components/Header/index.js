import Button from "../Button";
import Input from "../Input";
import Menu from "../Menu";
import * as S from "./styles";
import { find, logo } from "../../assets/img";

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.ContentHeader>
          <S.Img src={logo} alt="Logo Marvel" />
          <S.Search>
            <Input placeholder="Pesquisar" />
            <Button img={find} altImg="find" />
          </S.Search>
        </S.ContentHeader>
      </S.Content>
      <Menu />
    </S.Container>
  );
};

export default Header;
