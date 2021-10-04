import api from "./api";

function apiRequest(name, setValue) {
  api
    .get(name)
    .then((response) => {
      setValue([...response.data.data.results]);
    })
    .catch((err) => console.log("Erro: ", err));
}

export { apiRequest };
