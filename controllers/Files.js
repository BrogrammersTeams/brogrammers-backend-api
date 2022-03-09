const User = require("../database/models/User.schema");

const { addSomethingToArray, projectIsPresent, filterProjectsExcept, filterProjectsWith } = require("../utils/helpers");

const getAllFiles = (req, res) => {
  res.send("Get request on /File getAllFiles");
};

const getFile = (req, res) => {
  res.send("Get request on /File getFile");
};

const createFile = async (req, res) => {
  const user = req.body;

  console.log("Object is", obj);

  const UserFromDatabase = await User.find({ email: user.email });

  if (!UserFromDatabase.length) return res.send("No such User");

  const usersProject = UserFromDatabase[0].projects;

  if (!projectIsPresent(usersProject, user.project.projectName)) return res.send("Project Not Present");

  const remainingProjects = filterProjectsExcept(usersProject, user.project.projectName);
  const projectToUpdate = filterProjectsWith(usersProject, user.project.projectName);

  projectToUpdate.files = [...projectToUpdate.files, user.file];

  await User.updateOne(
    { email: user.email },
    { $set: { projects: addSomethingToArray(remainingProjects, projectToUpdate) } },
    {
      multi: true,
    }
  );
  res.send("Files Updated!");
};

const updateFile = (req, res) => {
  res.send("Patch request on /File updateFile");
};

const deleteFile = (req, res) => {
  res.send("Delete request on /File deleteFile");
};

module.exports = {
  getFile,
  createFile,
  updateFile,
  deleteFile,
  getAllFiles,
};
