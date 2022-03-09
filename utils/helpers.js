const addSomethingToArray = (array, objectToAdd) => [...array, objectToAdd];

const projectIsPresent = (arr, projectName) => arr.filter(eachObj => eachObj.projectName == projectName).length;
const filterProjectsExcept = (arr, projectName) => [...arr].filter(eachProject => eachProject.projectName != projectName);
const filterProjectsWith = (arr, projectName) => [...arr].filter(eachProject => eachProject.projectName == projectName)[0];

module.exports = {
  addSomethingToArray,
  projectIsPresent,
  filterProjectsExcept,
  filterProjectsWith,
};
