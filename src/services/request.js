import api from "./api";

function apiSeries(setSeries) {
  api
    .get("/series")
    .then((response) => {
      setSeries(response.data.data.results);
    })
    .catch((err) => console.log(err));
}

export { apiSeries };
