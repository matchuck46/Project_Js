import { TextField } from "@mui/material";
import { useState } from "react";
import { API, ENDPOINTS } from "../../api";

export const AddCategoryForm = ({ handleCloseCategory, handleOpenSnack }) => {
  const [name, setName] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    const newCategory = {
      name: name,
    };
    API(ENDPOINTS.categories).post(newCategory);
    handleCloseCategory();
    handleOpenSnack();
  };
  return (
    <div className="p-3">
      <h1>Dodaj kategorie</h1>
      <form onSubmit={handleForm}>
        <div className="my-2">
          <TextField
            type="text"
            label="Nazwa"
            className="w-100"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Dodaj kategorie
        </button>
      </form>
    </div>
  );
};
