const express = require("express");

//Routes
const { registrationRouter } = require("./routes/registrationRoutes");

const app = express();

app.use(express.json());

//EndPoint
app.use("/api/v1/registrations", registrationRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
