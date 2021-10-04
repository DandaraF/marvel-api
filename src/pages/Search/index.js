import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { search } from "../../services/search";

import { Layout, Description, TitlePage } from "../../components";
import * as S from "./styles";
import { comicImg, characterImg } from "../../assets/img";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    search("characters", "name", query, setCharacters);
    search("comics", "title", query, setComics);
    console.log(characters);
  }, [query]);

  return (
    <Layout>
      <S.Container>
        <S.Content>
          <TitlePage>{query}</TitlePage>

          {characters.map((character) => (
            <Description
              key={character.id}
              image={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              title={character.name}
              description={character.description}
              type="Character"
              typeImg={characterImg}
              width="35px"
            />
          ))}

          {comics.map((comic) => (
            <Description
              key={comic.id}
              image={comic.thumbnail.path + "." + comic.thumbnail.extension}
              title={comic.title}
              description={comic.description}
              type="Comic"
              typeImg={comicImg}
            />
          ))}
        </S.Content>
      </S.Container>
    </Layout>
  );
};

export default Search;
