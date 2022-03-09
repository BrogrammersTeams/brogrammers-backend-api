const User = require("../database/models/User.schema");

const getAllProjects = async (req, res) => {
  const projects = await User.find({}, { projects: 1 });
  res.send(projects);
};

const getProject = (req, res) => {
  res.send("Get request on /Project getProject");
};

const createProject = async (req, res) => {
  const user = req.body;

  const UserFromDatabase = await User.find({ email: user.email });

  if (!UserFromDatabase.length) return res.send("No such User");

  const usersProject = UserFromDatabase[0].projects;

  if (projectIsPresent(usersProject, user.project.projectName)) return res.send("Project is Already Present");

  await User.updateOne(
    { email: user.email },
    { $set: { projects: addSomethingToArray(usersProject, user.project) } },
    {
      multi: true,
    }
  );

  res.send("Post request on /Project createProject");
};

const addSomethingToArray = (array, objectToAdd) => [...array, objectToAdd];
const projectIsPresent = (arr, projectName) => arr.filter(eachObj => eachObj.projectName == projectName).length;

const updateProject = (req, res) => {
  res.send("Patch request on /Project updateProject");
};

const deleteProject = async (req, res) => {
  await User.deleteMany({});
  res.send("Get request on /Project deleteProject");
};

module.exports = {
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getAllProjects,
};