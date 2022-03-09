const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = ""

module.exports = mongoose
  .connect(`${MONGO_URL}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected!'))
  .catch(err => console.log(err));