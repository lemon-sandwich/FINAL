const mongoose = require('mongoose');

var Complaint = mongoose.model('Complaint', {
    complaintByUserEmail: { type: String },
    complaintDepartment: { type: String },
    complaintSubDepartment: { type: String },
    complaintDate: { type: Date },
    complaintDetails: { type: String },
    complaintStatus: { type: String },
    complaintOutcome: { type: String },
    complaintAssignee: { type: String },

});

module.exports = { Complaint };