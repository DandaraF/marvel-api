import Button from "../Button";
import Input from "../Input";
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
    </S.Container>
  );
};

export default Header;
