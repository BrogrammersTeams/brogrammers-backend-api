const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = "mongodb+srv://Brogrammers:BrogrammersTeams54321@cluster0.qsir5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

module.exports = mongoose
  .connect(`${MONGO_URL}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected!'))
  .catch(err => console.log(err));