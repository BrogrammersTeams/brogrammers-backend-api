const express = require("express");
const cors = require("cors");

const app = express();

require("./database/mongo");

// Route Handlers
const HomeRoute = require("./routes/Home");
const UserRoute = require("./routes/User");
const EmailRoute = require("./routes/Email");
const ProjectRoute = require("./routes/Projects");

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/", HomeRoute);
app.use("/user", UserRoute);
app.use("/email", EmailRoute);
app.use("/project", ProjectRoute);

app.get("/:id", (req, res) => {
  res.send(`No such route ${req.params.id}`);
});

app.listen(PORT, () => console.log(`Listening on PORT : PORT`));
