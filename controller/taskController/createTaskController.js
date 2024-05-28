const jwt = require('jsonwebtoken');
const { Task } = require("../../model/taskModel");
const myTokeKey = 'myTokeKey';

/*Create user handler*/
const createTask = async (req, res) => {
    try {
            const taskDetails = req.body;
            const token = req.header.token;
            
            const decoded = jwt.verify(req.headers.token, myTokeKey);
            const userData = JSON.parse(JSON.stringify(decoded))
            const userId = userData.user._id;
            const payload = {...taskDetails,
                userId, 
                taskStatus:"todo"
                
            }
             const task = new Task(payload)
             await task.save();
            res.status(201).json({
                message: "Successfully created!",
                data: task
            });
        } catch (e) {
            res.status(400).json(e)
        }
}

module.exports = createTask;