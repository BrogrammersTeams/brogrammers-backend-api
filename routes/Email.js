const { getAllEmails, getEmail, createEmail, updateEmail, deleteEmail } = require('../controllers/Email')

const express = require('express');

const route = express.Router();

route.route('/').get(getAllEmails);
route.route('/').post(createEmail);
route.route('/:id').get(getEmail);
route.route('/:id').patch(updateEmail);
route.route('/:id').delete(deleteEmail);

module.exports = route;