import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { search } from "../../services/search";

import { Layout, Description, TitlePage } from "../../components";
import * as S from "./styles";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    search("characters", "name", query, setCharacters);
    search("comics", "title", query, setComics);
  }, [query]);

  return (
    <Layout>
      <S.Container>
        <S.Content>
          <TitlePage>Results</TitlePage>
          {comics.map((comic) => (
            <Description
              key={comic.id}
              image={comic.thumbnail.path + "." + comic.thumbnail.extension}
              title={comic.title}
              description={comic.description}
            />
          ))}
          {characters.map((character) => (
            <Description
              key={character.id}
              image={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              title={character.name}
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
