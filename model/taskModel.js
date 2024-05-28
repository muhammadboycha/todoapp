const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskDetails:{
        type:String,
        required:[true,"Task details required"]
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User is invalid!"]
    },
    taskStatus:{
        type: String, //["todo", "completed", "inprogress","deleted"]
    },
    endDate:{
        type: Date
    },
    isDeleted:{
        type: Boolean
    },
    taskCompletedDate:{
        type: Date
    }

},{ timestamps: true })


const Task = mongoose.model('task', taskSchema);
//users == collection / table
// userSchema == structure of the collection or structure of the table.

//Users is the actual model for the users collection/table
module.exports = {Task};