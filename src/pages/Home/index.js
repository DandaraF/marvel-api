import { useCallback, useEffect, useState } from "react";
import Card from "../../components/Card";
import api from "../../services/api";
import * as S from "./styles";

const Home = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    api
      .get("/series")
      .then((response) => {
        setSeries(response.data.data.results);
      })
      .catch((err) => console.log(err));
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

  return (
    <S.Container>
      <S.Content>
        {series.map((serie) => (
          <Card
            key={serie.id}
            image={serie.thumbnail.path + "." + serie.thumbnail.extension}
            title={serie.title}
          />
        ))}
      </S.Content>{" "}
      <S.Button onClick={handleMore}>Next</S.Button>
    </S.Container>
  );
};

export default Home;
