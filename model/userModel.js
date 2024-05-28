const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        validate: {
            validator: function(value) {
                return typeof value === 'string';
            },
            message: "Name must be a string."
        }
    },
    email: {
        type: String,
        required: [true, "Email is required."],
    },
    mobile: {
        type: Number,
        unique: true,
        required: [true, "Mobile Number is required."],
    }
});
const Users = mongoose.model('users', userSchema);
//users == collection / table
// userSchema == structure of the collection or structure of the table.

//Users is the actual model for the users collection/table
module.exports = {Users};

