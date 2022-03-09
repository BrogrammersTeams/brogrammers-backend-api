const User = require("../database/models/User.schema");

const { addSomethingToArray } = require("../utils/helpers");

const getAllFiles = (req, res) => {
  res.send("Get request on /File getAllFiles");
};

const getFile = (req, res) => {
  res.send("Get request on /File getFile");
};

const createFile = async (req, res) => {
  const user = req.body;

  const UserFromDatabase = await User.find({ email: user.email });

  if (!UserFromDatabase.length) return res.send("No such User");

  const usersProject = UserFromDatabase[0].projects;

  console.log("User projects", usersProject);
  if (!projectIsPresent(usersProject, user.project.projectName)) return res.send("Project Not Present");

  const remainingProjects = filterProjectsExcept(usersProject, user.project.projectName);
  const projectToUpdate = filterProjectsWith(usersProject, user.project.projectName);

  console.log(remainingProjects);
  console.log("Before", projectToUpdate);
  projectToUpdate.files = [...projectToUpdate.files, user.file];
  console.log("After", projectToUpdate);

//   console.log(updatedProject);
  // const updatedProjects = [...remainingProjects, updatedProject];

  await User.updateOne(
    { email: user.email },
    { $set: { projects: addSomethingToArray(remainingProjects, projectToUpdate) } },
    {
      multi: true,
    }
  );
  res.send("Files Updated!");
};
const projectIsPresent = (arr, projectName) => arr.filter(eachObj => eachObj.projectName == projectName).length;
const filterProjectsExcept = (arr, projectName) => {
  console.log(arr, projectName);
  return [...arr].filter(eachProject => eachProject.projectName != projectName);
};
const filterProjectsWith = (arr, projectName) => [...arr].filter(eachProject => eachProject.projectName == projectName)[0];

const updateFile = (req, res) => {
  res.send("Patch request on /File updateFile");
};

const deleteFile = (req, res) => {
  res.send("Get request on /File deleteFile");
};

module.exports = {
  getFile,
  createFile,
  updateFile,
  deleteFile,
  getAllFiles,
};
