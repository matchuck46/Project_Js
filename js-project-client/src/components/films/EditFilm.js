import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { API, ENDPOINTS } from "../../api";

export const EditFilmDialog = (props) => {
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [loadedDirectors, setLoadedDirectors] = useState([]);
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [category, setCategory] = useState("");
  const [director, setDirector] = useState("");

  useEffect(() => {
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
          if (category.categoryId === props.categoryId) {
            setCategory(category.categoryId);
          }
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
          if (director.directorId === props.directorId) {
            setDirector(director.directorId);
          }
          directors.push(director);
        }
        setLoadedDirectors(directors);
      });
  }, [props.categoryId, props.directorId]);

  const editHandler = () => {
    const newFilm = {
      filmId: props.filmId,
      name: name,
      description: description,
      categoryId: category,
      directorId: director,
    };
    API(ENDPOINTS.films)
      .put(props.filmId, newFilm)
      .then((response) => {
        if (response.status === 204) {
          props.setOpen(false);
          props.setReload(true);
        }
      });
  };

  return (
    <div className="p-3 text-center">
      <h5>Edytuj film: {props.name}.</h5>
      <div className="my-2">
        <TextField
          type="text"
          label="Tytuł"
          className="w-100"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="my-2">
        <TextField
          type="text"
          label="Opis"
          className="w-100"
          value={description}
          multiline={true}
          rows={3}
          onChange={(e) => setDescription(e.target.value)}
          required={true}
        />
      </div>
      <div className="my-2">
        <FormControl fullWidth>
          <InputLabel>Kategoria *</InputLabel>
          <Select
            label="Kategoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            {loadedCategories.map((category) => (
              <MenuItem key={category.id} value={category.categoryId}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="my-2">
        <FormControl fullWidth>
          <InputLabel>Reżyser *</InputLabel>
          <Select
            label="Reżyser"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            required
          >
            {loadedDirectors.map((director) => (
              <MenuItem key={director.id} value={director.directorId}>
                {director.firstName} {director.lastName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <Button color="inherit" onClick={editHandler}>
          Potwierdź
        </Button>
        <Button color="inherit" onClick={() => props.setOpen(false)}>
          Anuluj
        </Button>
      </div>
    </div>
  );
};
