import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import Menu from "../Menu";
import Toggle from "../Toggle";
import * as S from "./styles";
import { find, logo } from "../../assets/img";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState("");

  const history = useHistory();

  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenu((prev) => !prev);
  };
  const handleClick = () => {
    if (search) history.push(`/search?q=${search}`);
  };

  return (
    <S.Container>
      <S.Content>
        <S.ContentHeader>
          <S.LinkHome to="/" onClick={() => window.scrollTo(0, 0)}>
            <S.Img src={logo} alt="Logo Marvel" />
          </S.LinkHome>

          <S.Search>
            <Input
              placeholder="Search"
              value={search}
              event={(ev) => setSearch(ev.target.value)}
              onKeyUp={(e) => e.key === "Enter" && handleClick()}
            />
            <Button onClick={handleClick} img={find} altImg="find" />
          </S.Search>
          <Toggle onClose={toggleMenu} />
        </S.ContentHeader>
        <Menu show={showMenu} onClose={toggleMenu} />
      </S.Content>
    </S.Container>
  );
};

export default Header;
