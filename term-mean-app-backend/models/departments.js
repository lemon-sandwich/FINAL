const mongoose = require('mongoose');

var Department = mongoose.model('Department', {
    departmentName: { type: String },
    departmentHead: { type: String },
    complaintsClosed: { type: Number },
    complaintsPending: { type: Number },
    subDepartments: { type: String },

});

module.exports = { Department };