const jwt = require('jsonwebtoken');
const { Task } = require("../../model/taskModel");
const myTokeKey = 'myTokeKey';

/*Create user handler*/
const taskCompleted = async (req, res) => {
    try {
            const taskDetails = req.body;
            const token = req.header.token;
            
            const decoded = jwt.verify(req.headers.token, myTokeKey);
            const userData = JSON.parse(JSON.stringify(decoded))
            const userId = userData.user._id;
             // Options for the update operation
        const options = {
            new: true, // Return the updated document
            runValidators: true // Validate the update against the schema
        };
        const now = new Date();

    // Get ISO string and split to manipulate
    const isoString = now.toISOString(); // 2024-05-19T09:34:58.804Z
    const isoDateTime = isoString.slice(0, -1);
             const result = await Task.findOneAndUpdate({_id:taskDetails.id,userId},{taskStatus:"completed",taskCompletedDate:isoDateTime},options)
            res.status(201).json({
                message: "Task completed ",
                data: result
            });
        } catch (e) {
            res.status(400).json(e)
        }
}

module.exports = taskCompleted;