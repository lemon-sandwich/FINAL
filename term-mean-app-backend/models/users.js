const mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    userType: { type: String },
    userdepartment: { type: String },
});

module.exports = { User };