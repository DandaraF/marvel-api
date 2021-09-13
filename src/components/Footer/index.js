import * as S from "./styles";
import { logo, github, linkedin } from "../../assets/img";

const Footer = () => {
  const linkUrl = (url) => {
    window.open(url, "_blank");
    return null;
  };

  return (
    <S.Container>
      <S.Content>
        <S.ContainerLogo to="/" onClick={() => window.scrollTo(0, 0)}>
          <S.Logo src={logo} alt="Logo Marvel" />
        </S.ContainerLogo>

        <S.Contact>
          <S.TextContact>
            &copy; Developed by <S.Strong>Dandara Silva</S.Strong>
          </S.TextContact>

          <S.ContentIcon>
            <S.Icon
              src={github}
              alt="GitHub Dandara Silva"
              onClick={() => linkUrl("https://github.com/DandaraF")}
            />
            <S.IconLikedin
              src={linkedin}
              alt="Linkedin Dandara Silva"
              onClick={() =>
                linkUrl("https://www.linkedin.com/in/dandara-silva-41745ba6/")
              }
            />
          </S.ContentIcon>
        </S.Contact>
      </S.Content>
    </S.Container>
  );
};

export default Footer;
