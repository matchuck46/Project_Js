import { Button } from "@mui/material";
import { API, ENDPOINTS } from "../../api";

export const DeleteFilmDialog = (props) => {
  const deleteHandler = () => {
    API(ENDPOINTS.films)
      .delete(props.filmId)
      .then((response) => {
        if (response.status === 204) {
          props.setOpen(false);
          props.setReload(true);
        }
      });
  };
  return (
    <div className="p-3 text-center">
      <h5>Usunąć film: {props.name}?</h5>
      <Button color="inherit" onClick={deleteHandler}>
        Potwierdź
      </Button>
      <Button color="inherit" onClick={() => props.setOpen(false)}>
        Anuluj
      </Button>
    </div>
  );
};
