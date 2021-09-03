import { useEffect, useState } from "react";
import api from "../../services/api";
import * as S from "./styles";

const Home = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    api
      .get("/series")
      .then((response) => {
        // console.log(response.data.data.results);
        setSeries(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return <S.Container>Page Home</S.Container>;
};

export default Home;
