import styles from "./About.module.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>Mi Primer Proyecto by Cesar Sell</h1>
      <h2>
        <b>Bienvenidos a mi primer página web de Rick And Morty.</b>
      </h2>
      <p>
        La página esta realizada de manera dinamica, creada con las siguientes
        tecnologías: "Front-end: React, Redux, JavaScript, Css, Html . "
        <br></br>
        <br></br>
        <strong>La página funciona de la siguiente manera:</strong>
        <br></br>
        <strong>1.</strong>Te diríges al search y pones un "ID", luego pulsas
        "AddCard", por ahora sólo funciona de esta manera.
        <br></br>
        <strong>2.</strong>Se te agregará una "Card" , luego puedes darle "Me
        Gusta" pulsando en el boton , automáticamente suma los likes y podes
        agregar a favoritos la Card que más te guste,
        <br></br>
        <strong>3.</strong> Para eliminar una "Card" debes hacer click en la
        "X".
        <br></br>
        <strong>4.</strong> Si clickeas en cualquier parte de la Card puedes
        acceder a la descripcion de esta misma
        <br></br>
        <strong>5.</strong> Puedes visualizar tus cards agregadas a "Favoritos",
        yendo a la sección en el nav, que tiene este mismo nombre "Favoritos";
        <br></br>
        <strong>6.</strong> Puedes visualizar tus cards agregadas a "Favoritos",
        yendo a la sección en el nav, que tiene este mismo nombre "Favoritos";
        <br></br>
        <strong>
          Muchas gracias por visitar mi página, aca abajo encontrarás mis datos
          de contácto. Saludos!!!
        </strong>
      </p>
      <h2>Mis redes sociales 🔜</h2>
      <ul>
        <Link to={"https://www.linkedin.com/in/cesar-daniel-sell-42a206157/"}>
          <li>LinkedIn</li>{" "}
        </Link>
        <Link to={"https://github.com/lordbattle/"}>
          <li>GitHub</li>{" "}
        </Link>
      </ul>
    </div>
  );
}
