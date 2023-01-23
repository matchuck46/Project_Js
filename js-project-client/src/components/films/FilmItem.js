import { useEffect, useState } from "react";

function FilmItem(props) {
  return (
    <li>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>
        {props.director.firstName} {props.director.lastName}
      </p>
    </li>
  );
}

export default FilmItem;

function count (useState ) { 

    
}