import { useEffect, useState } from "react";
import { API, ENDPOINTS } from "../api";
import FilmList from "../components/films/FilmList";

function AllFilmsPage() {
  const [loadedFilms, setLoadedFilms] = useState([]);

  useEffect(() => {
    API(ENDPOINTS.films)
      .getAll()
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        const films = [];
        for (const key in data) {
          const film = {
            id: key,
            ...data[key],
          };
          films.push(film);
        }
        setLoadedFilms(films);
        console.log(films);
      });
  }, []);
  return (
    <div>
      <h1>AllFilms</h1>
      <FilmList films={loadedFilms} />
    </div>
  );
}
export default AllFilmsPage;
