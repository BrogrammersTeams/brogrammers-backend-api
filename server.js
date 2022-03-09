const express = require("express");
const cors = require("cors");

const app = express();

require("./database/mongo");

// Route Handlers
const HomeRoute = require("./routes/Home");
const EmailRoute = require("./routes/Email");
const UserRoute = require("./routes/User");

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/", HomeRoute);
app.use("/email", EmailRoute);
app.use("/user", UserRoute);

app.listen(PORT, () => console.log(`Listening on PORT : PORT`));
