const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const authMiddleware = require("../middleware/authMiddleware");

const rout = express.Router();


rout.get("/getAllUsers", authMiddleware, getAllUsersController);


rout.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

rout.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports=rout;