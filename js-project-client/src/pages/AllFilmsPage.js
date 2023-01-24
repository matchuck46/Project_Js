import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { API, ENDPOINTS } from "../api";
import FilmList from "../components/films/FilmList";
import Layout from "../components/ui/Layout";

function AllFilmsPage() {
  const [loadedFilms, setLoadedFilms] = useState([]);
  const [listOfFilms, setListOfFilms] = useState([]);
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [loadedDirectors, setLoadedDirectors] = useState([]);
  const [category, setCategory] = useState("");
  const [director, setDirector] = useState("");
  const [search, setSearch] = useState("");
  const [reload, setReload] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);

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
        setListOfFilms(films);
      });
    API(ENDPOINTS.categories)
      .getAll()
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        const categories = [];
        for (const key in data) {
          const category = {
            id: key,
            ...data[key],
          };
          categories.push(category);
        }
        setLoadedCategories(categories);
      });
    API(ENDPOINTS.directors)
      .getAll()
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        const directors = [];
        for (const key in data) {
          const director = {
            id: key,
            ...data[key],
          };
          directors.push(director);
        }
        setLoadedDirectors(directors);
      });
    if (reload) {
      setOpenSnack(true);
    }
    setReload(false);
  }, [reload]);

  useEffect(() => {
    let films = loadedFilms;
    if (search !== "") {
      films = [];
      for (var i in loadedFilms) {
        if (loadedFilms[i].name.toLowerCase().includes(search)) {
          films.push(loadedFilms[i]);
        }
      }
    }
    if (category !== "") {
      films = films.filter((film) => film.categoryId === category);
    }
    if (director !== "") {
      films = films.filter((film) => film.directorId === director);
    }
    setListOfFilms(films);
  }, [loadedFilms, search, category, director]);

  const handleCloseSnack = () => {
    setOpenSnack(false);
  };

  return (
    <Layout>
      <div className="pt-4 text-center">
        <TextField
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          value={search}
          variant="outlined"
          fullWidth
          label="Szukaj"
          className="mt-3 mb-5"
        />
        <div className="row">
          <div className="col-3 my-5">
            <FormControl className="my-2" fullWidth>
              <InputLabel>Kategoria</InputLabel>
              <Select
                value={category}
                label="Kategoria"
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="">
                  <em>Wszystkie</em>
                </MenuItem>
                {loadedCategories.map((category) => (
                  <MenuItem key={category.id} value={category.categoryId}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className="my-2" fullWidth>
              <InputLabel>Reżyser</InputLabel>
              <Select
                value={director}
                label="Reżyser"
                onChange={(e) => setDirector(e.target.value)}
              >
                <MenuItem value="">
                  <em>Wszyscy</em>
                </MenuItem>
                {loadedDirectors.map((director) => (
                  <MenuItem key={director.id} value={director.directorId}>
                    {director.firstName} {director.lastName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-9">
            <h1>Lista filmów</h1>
            <FilmList films={listOfFilms} setReload={setReload} />
          </div>
        </div>
      </div>
      <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Operacja przebiegła pomyślnie!
        </Alert>
      </Snackbar>
    </Layout>
  );
}
export default AllFilmsPage;
