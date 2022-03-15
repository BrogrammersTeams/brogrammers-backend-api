const { getAllProjects, getProject, createProject, updateProject, deleteProject } = require("../controllers/Project");

const express = require("express");

const route = express.Router();

route.route("/").get(getAllProjects);
route.route("/").post(createProject);
route.route("/:id").get(getProject);
route.route("/:id").patch(updateProject);
route.route("/:id").delete(deleteProject);

module.exports = route;
