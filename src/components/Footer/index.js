import * as S from "./styles";
import { logo, github, linkedin } from "../../assets/img";
import { contact } from "../../mocks/contactData";
import { linkUrl } from "../../utils/link";

const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <S.ContainerLogo to="/" onClick={() => window.scrollTo(0, 0)}>
          <S.Logo src={logo} alt="Logo Marvel" />
        </S.ContainerLogo>

        <S.ContainerInfo>
          {contact.map((data) => (
            <S.Contact key={data.index}>
              <S.TextContact>
                &copy; Developed by <S.Strong>{data.name}</S.Strong>
              </S.TextContact>
              <S.ContentIcon>
                <S.Icon
                  src={github}
                  alt="GitHub Dandara Silva"
                  onClick={() => linkUrl(data.github)}
                />
                <S.IconLikedin
                  src={linkedin}
                  alt="Linkedin Dandara Silva"
                  onClick={() => linkUrl(data.linkedin)}
                />
              </S.ContentIcon>
            </S.Contact>
          ))}
          <S.Text>Data provided by Marvel.</S.Text>
        </S.ContainerInfo>
      </S.Content>
    </S.Container>
  );
};

export default Footer;
