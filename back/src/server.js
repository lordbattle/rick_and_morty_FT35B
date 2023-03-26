const PORT = 3001;
const server = require("./app");
const { sequelize } = require("./DB_connection");
const saveApiData = require("./controllers/saveApiData");

server.listen(PORT, async () => {
  await sequelize.sync({ force: true }); // sincronizando servidor con la BD
  await saveApiData(); //Ejecuta esta funcion (hara las peticiones a la Api y la guardara en la BD)
  console.log("Server raised in port " + PORT);
});
