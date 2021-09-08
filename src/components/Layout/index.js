import * as S from "./styles";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <S.Content>{children}</S.Content>
      <S.Footer>Footer</S.Footer>
    </S.Container>
  );
};

export default Layout;
