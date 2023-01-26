import { TextField } from "@mui/material";
import { useState } from "react";
import { API, ENDPOINTS } from "../../api";

export const AddDirectorForm = ({ handleCloseDirector, handleOpenSnack }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    const newDirector = {
      firstName: firstName,
      lastName: lastName,
    };
    API(ENDPOINTS.directors)
      .post(newDirector)
      .then((response) => {
        if (response.status === 201) {
          handleCloseDirector();
          handleOpenSnack();
        }
      });
  };
  return (
    <div className="p-3">
      <h1>Dodaj reżysera</h1>
      <form onSubmit={handleForm}>
        <div className="my-2">
          <TextField
            type="text"
            label="Imię"
            className="w-100"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="my-2">
          <TextField
            type="text"
            label="Nazwisko"
            className="w-100"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Dodaj reżysera
        </button>
      </form>
    </div>
  );
};
