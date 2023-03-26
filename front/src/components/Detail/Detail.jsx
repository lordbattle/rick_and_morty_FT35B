import styles from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail(props) {
  //console.log(useParams())
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  //console.log(character)

  return (
    <div>
        <Link to='/Home'>
            <button>
                Go Back
            </button>
        </Link>
        <h1>Detail</h1>
        <h2>Nombre: {character.name}</h2>
        <h2>Estado: {character.status}</h2>
        <h2>Especie: {character.species}</h2>
        <h2>Genero: {character.gender}</h2>
        {character.origin && <h2>Origen: {character.origin.name}</h2>}
        {character.location ? <h2>Localidad: {character.location.name}</h2> : null}
        <img src={character.image} alt={character.name} />
        
    </div>
  );
}
