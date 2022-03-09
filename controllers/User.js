const User = require("../database/models/User.schema");

const getAllUsers = (req, res) => {
  res.send("Get request on /User getAllUsers");
};

const getUser = async (req, res) => {
  const users = await User.find({});
  res.send(users);
};

const createUser = async (req, res) => {
  const obj = {
    fullName: "mhadsebhavesh",
    email: "bhaveshmhadse9@gmail.com",
    contactNo: 9136298868,
    projects: [
      {
        projectName: "Baray",
        contributors: ["Bhavesh"],
        files: [
          {
            type: ".py",
            name: "index.py",
            content: "def ",
          },
        ],
      },
    ],
  };
  const newUser = new User();
  await newUser.save();
  res.send("Post request on /User createUser");
};

const updateUser = (req, res) => {
  res.send("Patch request on /User updateUser");
};

const deleteUser = (req, res) => {
  res.send("Get request on /User deleteUser");
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
