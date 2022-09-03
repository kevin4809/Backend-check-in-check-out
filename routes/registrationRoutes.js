const express = require("express");

//Importamos los controladores
const {
  getAllRegistrations,
  getRegistrationById,
  createRegistrations,
  updateRegistration,
  deleteRegistrations,
} = require("../controllers/registrationController");

const registrationRouter = express.Router();

registrationRouter.get("/", getAllRegistrations);

registrationRouter.post("/", createRegistrations);

registrationRouter.get("/:id", getRegistrationById);

registrationRouter.patch("/:id", updateRegistration);

registrationRouter.delete("/:id", deleteRegistrations);

module.exports = { registrationRouter };
