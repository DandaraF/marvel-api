import { Layout, TitlePage, SubTitle } from "../../components";
import {} from "../../components/SubTitle/styles";
import { githubBlack, linkedinBlack } from "../../assets/img";
import * as S from "./styles";

const About = () => {
  return (
    <Layout>
      <S.Container>
        <S.Content>
          <S.Category>
            <TitlePage>About</TitlePage>
            <S.Text>
              Aplicação em ReactJS que consome dados da API da Marvel. A
              aplicação possui recursos de navegação, pesquisas e exibições de
              imagens.
            </S.Text>
          </S.Category>
          <S.Category>
            <SubTitle>Technologies</SubTitle>
            <S.Item>ReactJS</S.Item>
            <S.Item>ESLint</S.Item>
            <S.Item>md5</S.Item>
            <S.Item>Styled Components</S.Item>
            <S.Item>Axios</S.Item>
          </S.Category>
          <S.Category>
            <SubTitle>Contact: </SubTitle>
            <S.Created>
              <S.Text>Dandara Silva</S.Text>
              <S.Contact>
                <S.LinkIcon>
                  <S.Icon src={linkedinBlack} alt="Linkedin" />{" "}
                </S.LinkIcon>
                <S.LinkIcon>
                  <S.Icon src={githubBlack} alt="GitHub" />
                </S.LinkIcon>
              </S.Contact>
            </S.Created>
          </S.Category>
        </S.Content>
      </S.Container>
    </Layout>
  );
};

export default About;
