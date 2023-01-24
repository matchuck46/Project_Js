import {
  Alert,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API, ENDPOINTS } from "../../api";
import { AddCategoryForm } from "../categories/AddCategoryForm";
import { AddDirectorForm } from "../directors/AddDirectorForm";

function AddFilmForm() {
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [loadedDirectors, setLoadedDirectors] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [director, setDirector] = useState("");
  const [error, setError] = useState("");
  const [openCategory, setOpenCategory] = useState(false);
  const [openDirector, setOpenDirector] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const navigate = useNavigate();

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
  }, [openCategory, openDirector]);

  const handleForm = (e) => {
    e.preventDefault();
    const newFilm = {
      name: name,
      description: description,
      categoryId: category,
      directorId: director,
    };
    API(ENDPOINTS.films)
      .post(newFilm)
      .then(
        (response) => {
          navigate("/");
        },
        (error) => {
          setError(error.response.data);
        }
      );
  };

  const handleCloseCategory = (e) => {
    setOpenCategory(false);
  };

  const handleCloseDirector = (e) => {
    setOpenDirector(false);
  };

  const handleOpenSnack = (e) => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (e) => {
    setOpenSnack(false);
  };

  return (
    <div>
      <h1>Dodaj film</h1>
      <form onSubmit={handleForm}>
        <div className="my-2">
          <TextField
            type="text"
            label="Tytuł"
            className="w-100"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="my-2">
          <TextField
            type="text"
            label="Opis"
            className="w-100"
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
              <MenuItem value="" onClick={(e) => setOpenCategory(true)}>
                <em>+ Dodaj kategorie</em>
              </MenuItem>
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
              <MenuItem value="" onClick={(e) => setOpenDirector(true)}>
                <em>+ Dodaj reżysera</em>
              </MenuItem>
              {loadedDirectors.map((director) => (
                <MenuItem key={director.id} value={director.directorId}>
                  {director.firstName} {director.lastName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="my-2">
          <span className="text-danger">{error}</span>
        </div>
        <button type="submit" className="btn btn-dark">
          Dodaj film
        </button>
      </form>
      <Dialog open={openCategory} onClose={handleCloseCategory}>
        <AddCategoryForm
          handleCloseCategory={handleCloseCategory}
          handleOpenSnack={handleOpenSnack}
        />
      </Dialog>
      <Dialog open={openDirector} onClose={handleCloseDirector}>
        <AddDirectorForm
          handleCloseDirector={handleCloseDirector}
          handleOpenSnack={handleOpenSnack}
        />
      </Dialog>
      <Snackbar
        open={openSnack}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Dodano pomyślnie!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AddFilmForm;
