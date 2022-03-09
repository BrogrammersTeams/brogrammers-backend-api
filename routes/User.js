const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/User");

const express = require("express");

const route = express.Router();

route.route("/").get(getAllUsers);
route.route("/").post(createUser);
route.route("/:id").get(getUser);
route.route("/:id").patch(updateUser);
route.route("/:id").delete(deleteUser);

module.exports = route;
