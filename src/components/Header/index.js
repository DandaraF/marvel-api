import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Menu from "../Menu";
import Toggle from "../Toggle";
import * as S from "./styles";
import { find, logo } from "../../assets/img";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenu((prev) => !prev);
  };
  return (
    <S.Container>
      <S.Content>
        <S.ContentHeader>
          <S.Img src={logo} alt="Logo Marvel" />
          <S.Search>
            <Input placeholder="Search" />
            <Button img={find} altImg="find" />
          </S.Search>{" "}
          <Toggle onClose={toggleMenu} />
        </S.ContentHeader>
        <Menu show={showMenu} onClose={toggleMenu} />
      </S.Content>
    </S.Container>
  );
};

export default Header;
