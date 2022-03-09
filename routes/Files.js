const { getAllFiles, getFile, createFile, updateFile, deleteFile } = require("../controllers/Files");

const express = require("express");

const route = express.Router();

route.route("/").get(getAllFiles);
route.route("/").post(createFile);
route.route("/:id").get(getFile);
route.route("/:id").patch(updateFile);
route.route("/:id").delete(deleteFile);

module.exports = route;
