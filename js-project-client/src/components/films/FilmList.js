import FilmItem from "./FilmItem";

function FilmList(props) {
  return (
    <ul>
      {props.films.map((film) => (
        <FilmItem
          key={film.filmId}
          filmId={film.filmId}
          categoryId={film.categoryId}
          directorId={film.directorId}
          description={film.description}
          name={film.name}
          director={film.director}
        />
      ))}
    </ul>
  );
}

export default FilmList;
