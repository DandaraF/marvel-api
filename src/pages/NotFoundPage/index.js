import { Layout } from "../../components";
import * as S from "./styles";
import { notFound } from "../../assets/img";

const NotFoundPage = () => {
  return (
    <Layout>
      <S.Container>
        <S.Text>ERROR 404 - PAGE NOT FOUND</S.Text>

        <S.Img src={notFound} alt="Hulk" />
      </S.Container>
    </Layout>
  );
};

export default NotFoundPage;
