const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var userController = require('./controllers/userController.js');
var departmentController = require('./controllers/departmentController.js');
var complaintController = require('./controllers/complaintController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/users', userController);
app.use('/department', departmentController);
app.use('/complaint', complaintController);