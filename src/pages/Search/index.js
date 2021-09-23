import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { search } from "../../services/search";

import { Layout, Description, TitlePage } from "../../components";
import * as S from "./styles";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const [result, setResult] = useState([]);

  // const parameters = [
  //   { category: "comics", name: "title" },
  //   { category: "characters", name: "name" },
  // ];

  useEffect(() => {
    // search(comics, title, query, setResult);
    //   // search(characters, name, query, setResult);

    // search("characters", "name", query, setResult);
    search("comics", "title", query, setResult);
    //   // search(query, setResult);
    //   // apiRequest(`/comics?title=${query}`, setResult);
    //   // apiRequest(`/characters?name=${query}`, setResult);
  }, [query]);

  return (
    <Layout>
      <S.Container>
        <S.Content>
          <TitlePage>Results</TitlePage>
          {result.map((character) => (
            <Description
              key={character.id}
              image={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              title={character.name}
              title={character.title}
              description={character.description}
              description={character.variantDescription}
            />
          ))}
        </S.Content>
      </S.Container>
    </Layout>
  );
};

export default Search;
