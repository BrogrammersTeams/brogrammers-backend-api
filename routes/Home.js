const { getAllHomes, getHome, createHome, updateHome, deleteHome } = require("../controllers/Home");

const express = require("express");

const route = express.Router();

route.route("/").get(getAllHomes);
route.route("/").post(createHome);

module.exports = route;
