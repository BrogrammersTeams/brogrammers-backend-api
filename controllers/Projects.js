const User = require("../database/models/User.schema");

const { addSomethingToArray, projectIsPresent } = require("../utils/helpers");

const getAllProjects = async (req, res) => {
  const projects = await User.find({}, { projects: 1 });
  res.send(projects);
};

const getProject = async (req, res) => {
  const query = req.query;
  let user = await User.find({ query });

  if (user.length) {
    return res.send(user);
  }

  res.send("No Such User");
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
