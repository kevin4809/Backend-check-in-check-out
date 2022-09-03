const { Registration } = require("../models/registrationsModel");

const getAllRegistrations = async (req, res) => {
  try {
    const registration = await Registration.findAll();

    res.status(200).json({
      status: "success",
      data: {
        registration,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRegistrationById = async (req, res) => {
  try {
    const id = req.params.id;

    const registrationById = await Registration.findOne({ where: { id } });

    if (!registrationById) {
      return res.status(404).json({
        status: "error",
        message: "user not found ",
      });
    }

    res.status(200).json({
      status: "success",
      data: { registrationById },
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegistrations = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newRegistration = await Registration.create({
      entranceTime,
      status: "working",
    });

    res.status(201).json({
      status: "success",
      data: { newRegistration },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegistration = async (req, res) => {
  try {
    const id = req.params.id;
    const { exitTime } = req.body;

    const updateRegister = await Registration.findOne({ where: { id } });

    if (!updateRegister) {
      return res.status(404).json({
        status: "error",
        message: "user not found ",
      });
    }

    await updateRegister.update({ exitTime, status: "out" });

    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegistrations = async (req, res) => {
  const { id } = req.params;

  const registrationDelete = await Registration.findOne({ where: { id } });

  if (!registrationDelete) {
    return res.status(404).json({
      status: "error",
      message: "user not found ",
    });
  }

  await registrationDelete.update({ status: "canceled" });
};

module.exports = {
  getAllRegistrations,
  getRegistrationById,
  createRegistrations,
  updateRegistration,
  deleteRegistrations,
};
