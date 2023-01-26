import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Dialog } from "@mui/material";
import { useState } from "react";
import { DeleteFilmDialog } from "./DeleteFilm";
import { EditFilmDialog } from "./EditFilm";

function FilmItem(props) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <li>
      <div className="border border-dark rounded my-3">
        <h3>{props.name}</h3>
        <p className="fst-italic">
          {props.director.firstName} {props.director.lastName}
        </p>
        <p className="fw-light">Kategoria: {props.category.name}</p>
        <p>{props.description}</p>
        <Button color="inherit" onClick={() => setOpenEdit(true)}>
          <EditIcon />
        </Button>
        <Button color="inherit" onClick={() => setOpenDelete(true)}>
          <ClearIcon />
        </Button>
        <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
          <DeleteFilmDialog
            setOpen={setOpenDelete}
            setReload={props.setReload}
            filmId={props.filmId}
            name={props.name}
          />
        </Dialog>
        <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
          <EditFilmDialog
            setOpen={setOpenEdit}
            setReload={props.setReload}
            filmId={props.filmId}
            name={props.name}
            description={props.description}
            categoryId={props.categoryId}
            directorId={props.directorId}
          />
        </Dialog>
      </div>
    </li>
  );
}

export default FilmItem;
