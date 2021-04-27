const mongoose = require('mongoose');

const mailSchema = mongoose.Schema({
    name: {type: String, required: true},
    from: {type: String, required: true},
    to: {type: String, required: true},
    subject: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
});

module.exports = mongoose.model('Mail', mailSchema);
