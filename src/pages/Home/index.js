import { useEffect, useState, useCallback } from "react";
import { apiSeries } from "../../services/request";
import api from "../../services/api";
import * as S from "./styles";
import { Search, Card, Modal } from "../../components";

const Home = () => {
  const [series, setSeries] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [query, setQuery] = useState({});

  useEffect(() => {
    apiSeries(setSeries);
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
  function getSerie(id, title, img, description, comics) {
    setQuery({ id, title, img, description, comics });
  }

  return (
    <S.Container>
      <S.Content>
        <Search />
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
          />
        ) : null}
      </S.Content>
      <S.Button onClick={handleMore}>Next</S.Button>
    </S.Container>
  );
};

export default Home;
