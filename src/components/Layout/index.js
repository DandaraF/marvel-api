import Header from "../Header";
import Footer from "../Footer";
import * as S from "./styles";

const Layout = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <S.Content>{children}</S.Content>
      <S.Footer>
        <Footer />
      </S.Footer>
    </S.Container>
  );
};

export default Layout;
