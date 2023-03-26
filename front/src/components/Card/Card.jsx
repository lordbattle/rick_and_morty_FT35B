import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorites, deleteFavorites } from "../../redux/action";

export default function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
  
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorites(props.id));
    } else {
      setIsFav(true);
      dispatch(addFavorites(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
    <div className={styles.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <div className={styles.buttonContainer}>
        <button onClick={props.onClose}>X</button>
      </div>
      <Link to={`/detail/${props.id}`}>
        <div className={styles.dataContainer}>
          <h2>{props.name}</h2>
          <h4>{props.species}</h4>
          <h4>{props.gender}</h4>
        </div>
        <img className={styles.image} src={props.image} alt={props.name} />
      </Link>
    </div>
  );
}

/* export function mapDispatchToProps(dispatch) {
  return {
    addFavorites: (character) => {
      dispatch(addFavorites(character));
    },
    deleteFavorites: (id) => {
      dispatch(deleteFavorites(id));
    },
  };
}

export default connect(null, mapDispatchToProps)(Card); */
