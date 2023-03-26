const axios = require("axios");
const { character } = require("../DB_connection");

const getApiData = async () => {
  try {
    let allCharacters = [];
    //vamos a guardar las 5 primeros paginas
    for (let i = 1; i < 6; i++) {
      let apiData = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${i}`
      );
      const pageCharacters = apiData.data.results.map(char => {
        return {
          id: char.id,
          name: char.name,
          species: char.species,
          status: char.status,
          origin: char.origin?.name,
          gender: char.gender,
          image: char.image,
        };
      });
      allCharacters = [...allCharacters, ...pageCharacters];
    }
    console.log(allCharacters);
    return allCharacters;
  } catch (error) {
    return { msg: error.message };
  }
};

const saveApiData = async () => {
  try {
    const allCharacters = await getApiData();
    await character.bulkCreate(allCharacters); // bulkCreate --> recibe un arreglo y por cada elemento lo graba en la BD como un nuevo registro
    return allCharacters;
  } catch (error) {
    return { msg: error.message };
  }
};

module.exports = saveApiData;
