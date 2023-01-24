import { useEffect, useState } from "react";
import FilmItem from "./FilmItem";

function FilmList(props) {
  const [reload, setReload] = useState(false);
  useEffect(() => {
    props.setReload(reload);
    setReload(false);
  }, [props, reload]);
  return (
    <ul style={{ listStyle: "none" }}>
      {props.films.map((film) => (
        <FilmItem
          key={film.filmId}
          filmId={film.filmId}
          categoryId={film.categoryId}
          directorId={film.directorId}
          description={film.description}
          name={film.name}
          director={film.director}
          category={film.category}
          setReload={setReload}
        />
      ))}
    </ul>
  );
}

export default FilmList;
