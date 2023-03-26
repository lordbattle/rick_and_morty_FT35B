import { useDispatch, useSelector } from "react-redux";
import styles from "./Favorites.module.css";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/action";

export const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  

  return (
    <div>
      <div>
        <select name="order" onClick={handlerOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filter" onClick={handlerFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {myFavorites?.map((fav) => (
        <Card
          name={fav.name}
          id={fav.id}
          key={fav.id}
          gender={fav.gender}
          image={fav.image}
        />
      ))}
    </div>
  );
};
