const { getAllProjects, getProject, createProject, updateProject, deleteProject } = require("../controllers/Projects");

const express = require("express");

const route = express.Router();

route.route("/").get(getAllProjects);
route.route("/").post(createProject);
route.route("/:email").get(getProject);
route.route("/:id").patch(updateProject);
route.route("/:id").delete(deleteProject);

module.exports = route;
