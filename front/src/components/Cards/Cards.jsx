import Card from "../Card/Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {characters.map(({ name, species, gender, image, id }) => {
        return (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => props.onClose(id)}
            id={id}
          />
        );
      })}
    </div>
  );
}
