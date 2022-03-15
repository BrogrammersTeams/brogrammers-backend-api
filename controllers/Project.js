const Project = require("../database/models/Project.schema");

const getAllProjects = async (req, res) => {
  const allProjects = await Project.find({});
  res.send(allProjects);
};

const getProject = (req, res) => {
  res.send("Get request on /Project getProject");
};

const createProject = async (req, res) => {
  const projectObject = req.body;
  const project = new Project(projectObject);

  await project.save();

  res.send("Post request on /Project createProject");
};

const updateProject = (req, res) => {
  res.send("Patch request on /Project updateProject");
};

const deleteProject = (req, res) => {
  res.send("Get request on /Project deleteProject");
};

module.exports = {
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getAllProjects,
};
