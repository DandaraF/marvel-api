import { useState, useCallback, useEffect } from "react";
import { useQuery, useModal, useLoading } from "../../contexts/";
import { apiRequest } from "../../services/request";
import api from "../../services/api";
import * as S from "./styles";
import {
  Button,
  Card,
  Modal,
  Layout,
  TitlePage,
  Loading,
} from "../../components";
import theme from "../../styles/theme";

const Comics = () => {
  const [series, setSeries] = useState([]);
  const { modal, setModal } = useModal();
  const { query, setQuery } = useQuery();
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    apiRequest("/series", setSeries);
  }, []);

  const handleMore = useCallback(async () => {
    setLoading(true);
    try {
      const offset = series.length;
      const response = await api.get("series", {
        params: {
          offset,
        },
      });
      setSeries([...series, ...response.data.data.results]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  });

  function getSerie(id, title, img, description) {
    setQuery({
      id,
      title,
      img,
      description,
    });
  }

  return (
    <Layout>
      <S.Container>
        <S.Content>
          <TitlePage> Comics </TitlePage>
          {series.map((serie) => (
            <Card
              onClick={() => {
                setModal(true);
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
          {modal ? (
            <Modal
              onClose={() => setModal(false)}
              img={query.img}
              title={query.title}
              description={query.description}
              creator={query.creator}
            />
          ) : null}
        </S.Content>
        {loading ? <Loading /> : ""}
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
