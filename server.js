const { app } = require("./app");

const { db } = require("./utils/database");

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();

    const PORT = 3025;

    app.listen(PORT, () => {
      console.log("La aplicacion esta corriendo correctamente :D");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
