const sendEmail = require("../utils/email");

const getAllEmails = (req, res) => {
  res.send("Get request on /Email getAllEmails");
};

const getEmail = (req, res) => {
  res.send("Get request on /Email getEmail");
};

const createEmail = (req, res) => {
  const obj = req.body;

  console.log("oBJECT IS ", obj);

  if (obj.topic == "OTP") {
    return sendOtp(obj);
  }

  res.send("Post request on /Email createEmail");
};

const updateEmail = (req, res) => {
  res.send("Patch request on /Email updateEmail");
};

const deleteEmail = (req, res) => {
  res.send("Get request on /Email deleteEmail");
};

const sendOtp = async obj => {
  const OTP = Math.floor(Math.random() * 1000000);
  sendEmail(obj.to, obj.subject, `Your Otp is ${OTP}`);
  return res.send({ otp: OTP });
};

module.exports = {
  getEmail,
  createEmail,
  updateEmail,
  deleteEmail,
  getAllEmails,
};
