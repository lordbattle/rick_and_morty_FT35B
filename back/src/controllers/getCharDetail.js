const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharDetail(req, res) {
  const { detailId } = req.params;
  const response = await axios.get(URL + detailId);

  try {
    const character = {
      id: response.data.id,
      image: response.data.image,
      name: response.data.name,
      gender: response.data.gender,
      species: response.data.species,
      stats: response.data.status,
      origin: response.data.origin?.name,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json(error.message);
  }
  //Con Promesas
  /* axios
    .get(URL + detailId)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        stats: data.status,
        origin: data.origin?.name,
      };
      res.status(200).json(character);
    })
    .catch((error) => res.status(500).json(error.message)); */
}

module.exports = { getCharDetail };
