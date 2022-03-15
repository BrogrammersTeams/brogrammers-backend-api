const mongoose = require("mongoose");

const FileSchema = mongoose.Schema({
  type: { type: String, default: ".txt" },
  name: { type: String, default: "brogrammers.txt" },
  content: { type: String, default: "" },
});

const ProjectSchema = mongoose.Schema({
  uuid: { type: String, default: "devconnect" },
  projectName: { type: String, default: "devconnect" },
  projectDescription: { type: String, default: "devconnect" },
  projectLink: { type: String, default: "devconnect" },
  tags: [{ type: String, default: [] }],
  contributors: [{ type: String, default: ["bhavesh", "athya", "akshya", "siddhi"] }],
  files: [{ type: FileSchema }],
});

const UserModel = new mongoose.Schema({
  uuid: { type: String, default: "devconnect" },
  email: { type: String, default: "" },
  testing: { type: mongoose.Schema.Types.Mixed, default: {} },
  projects: [{ type: ProjectSchema }],
});

const User = mongoose.model("User", UserModel);

module.exports = User;
