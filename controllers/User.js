const User = require("../database/models/User.schema");

const getAllUsers = (req, res) => {
  res.send("Get request on /User getAllUsers");
};

const getUser = async (req, res) => {
  const users = await User.find({});
  res.send(users);
};

const createUser = async (req, res) => {
  const user = req.body;

  const userArray = await User.find({ email: req.query.email });

  console.log(userArray);

  if (userArray.length) {
    return res.send("User is Present");
  }

  //   const obj = {
  //     fullName: "mhadsebhavesh",
  //     email: "bhaveshmhadse9@gmail.com",
  //     contactNo: 9136298868,
  //     projects: [
  //       {
  //         projectName: "Baray",
  //         contributors: ["Bhavesh"],
  //         files: [
  //           {
  //             type: ".py",
  //             name: "index.py",
  //             content: "def ",
  //           },
  //         ],
  //       },
  //     ],
  //   };
  const newUser = new User(user);
  await newUser.save();
  res.send("Post request on /User createUser");
};

const updateUser = (req, res) => {
  res.send("Patch request on /User updateUser");
};

const deleteUser = async(req, res) => {
  await User.deleteMany({});
  res.send("Get request on /User deleteUser");
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
