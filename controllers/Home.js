const { spawn } = require("child_process");

const getAllHomes = (req, res) => {
  res.send("Get request on /Home getAllHomes");
};

const getHome = (req, res) => {
  res.send("Get request on /Home getHome");
};

const createHome = (req, res) => {
  res.send("Post request on /Home createHome");
};

const updateHome = async (req, res) => {
  // export default async function handler(req, res) {
  let python = spawn("python", ["hello.py"]);
  let dataToSend = "";

  for await (const data of python.stdout) {
    //console.log(data.toString());
    dataToSend += data.toString();
  }
  console.log(dataToSend);
  //   return res.status(200).json({ message: dataToSend})
  // }
  res.send({ data: dataToSend.toString() });
};

const deleteHome = (req, res) => {
  res.send("Get request on /Home deleteHome");
};

module.exports = {
  getHome,
  createHome,
  updateHome,
  deleteHome,
  getAllHomes,
};
