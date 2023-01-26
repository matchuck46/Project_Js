import FilmItem from "./FilmItem";

function FilmList(props) {
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
          setReload={props.setReload}
        />
      ))}
    </ul>
  );
}

export default FilmList;
