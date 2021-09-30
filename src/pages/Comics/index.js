import { useState, useCallback, useEffect } from "react";
import { useQuery, useModal } from "../../contexts/";
import { apiRequest } from "../../services/request";
import api from "../../services/api";
import * as S from "./styles";
import { Button, Card, Modal, Layout, TitlePage } from "../../components";
import theme from "../../styles/theme";

const Comics = () => {
  const [series, setSeries] = useState([]);
  const { isModalVisible, setIsModalVisible } = useModal();
  const { query, setQuery } = useQuery();

  useEffect(() => {
    apiRequest("/series", setSeries);
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = series.length;
      const response = await api.get("series", {
        params: {
          offset,
        },
      });
      setSeries([...series, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  });
  function getSerie(id, title, img, description) {
    setQuery({ id, title, img, description });
  }

  return (
    <Layout>
      <S.Container>
        <S.Content>
          <TitlePage>Comics</TitlePage>
          {series.map((serie) => (
            <Card
              onClick={() => {
                setIsModalVisible(true);
                getSerie(
                  serie.id,
                  serie.title,
                  serie.thumbnail.path + "." + serie.thumbnail.extension,
                  serie.description
                );
              }}
              key={serie.id}
              image={serie.thumbnail.path + "." + serie.thumbnail.extension}
              title={serie.title}
            />
          ))}
          {isModalVisible ? (
            <Modal
              onClose={() => setIsModalVisible(false)}
              img={query.img}
              title={query.title}
              description={query.description}
              creator={query.creator}
            />
          ) : null}
        </S.Content>

        <Button
          width="200px"
          height="35px"
          bgColor={theme.palette.button.primary}
          onClick={handleMore}
        >
          More
        </Button>
      </S.Container>
    </Layout>
  );
};

export default Comics;
