const mongoose = require("mongoose");

const FileSchema = mongoose.Schema({
  type: { type: String, default: ".txt" },
  name: { type: String, default: "brogrammers.txt" },
  content: { type: String, default: "" },
});

const ProjectSchema = mongoose.Schema({
  projectName: { type: String, default: "devconnect" },
  contributors: [{ type: String, default: ["bhavesh", "athya", "akshya", "siddhi"] }],
  files: [{ type: FileSchema }],
});

const UserModel = new mongoose.Schema({
  fullName: { type: String, default: "" },
  email: { type: String, default: "" },
  contactNo: { type: Number, default: 1234567890 },
  projects: [{ type: ProjectSchema }],
});

const User = mongoose.model("User", UserModel);

module.exports = User;

/*

{
  "User": {
    "firstName": "Baray",
    "age": 20,

    "projects": [
      {
        "projectName": "devfolio",
        "contributors": ["Akshay", "Atharva", "Siddhi", "Bhavesh"],
        "files": [
          {
            "type": ".js",
            "name": "index.js",
            "content": "console.log('Baray')"
          },
          {
            "type": ".txt",
            "name": "index.txt",
            "content": "Baray"
          }
        ]
      },
      {
        "projectName": "devfolio",
        "contributors": ["Akshay", "Atharva", "Siddhi", "Bhavesh"],
        "files": [
          {
            "type": ".js",
            "name": "index.js",
            "content": "console.log('Baray')"
          }
        ]
      }
    ]
  }
}

*/
