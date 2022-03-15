const mongoose = require("mongoose");

const ProjectModel = new mongoose.Schema({
  projectDescription: { type: String, default: "" },
});

const Project = mongoose.model("Project", ProjectModel);

module.exports = Project;
