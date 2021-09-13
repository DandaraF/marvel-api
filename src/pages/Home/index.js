import { useEffect, useState, useCallback } from "react";
import { apiRequest } from "../../services/request";
import api from "../../services/api";
import { Button, Card, Modal, Layout, TitlePage } from "../../components";
import * as S from "./styles";
import theme from "../../styles/theme";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [query, setQuery] = useState({});

  useEffect(() => {
    apiRequest("/characters", setCharacters);
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get("characters", {
        params: {
          offset,
        },
      });
      setCharacters([...characters, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  });
  function getCharacter(id, name, img, description, series) {
    setQuery({ id, name, img, description, series });
  }
  return (
    <Layout>
      <S.Container>
        <S.Content>
          <TitlePage>Characters</TitlePage>
          {characters.map((character) => (
            <Card
              onClick={() => {
                setIsModalVisible(true);
                getCharacter(
                  character.id,
                  character.name,
                  character.thumbnail.path +
                    "." +
                    character.thumbnail.extension,
                  character.description
                );
              }}
              key={character.id}
              image={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              title={character.name}
              text={character.comics}
            />
          ))}
          {isModalVisible ? (
            <Modal
              onClose={() => setIsModalVisible(false)}
              img={query.img}
              title={query.name}
              description={query.description}
            />
          ) : null}
          <Button
            width="200px"
            height="35px"
            bgColor={theme.palette.button.primary}
            onClick={handleMore}
          >
            More
          </Button>
        </S.Content>
      </S.Container>
    </Layout>
  );
};

export default Home;
