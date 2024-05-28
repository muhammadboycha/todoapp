const jwt = require('jsonwebtoken');
const { Task } = require("../../model/taskModel");
const myTokeKey = 'myTokeKey';

/*Create user handler*/
const updateTask = async (req, res) => {
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
             const result = await Task.findOneAndUpdate({_id:taskDetails.id,userId},{taskDetails:taskDetails.newTaskDetails},options)
            res.status(201).json({
                message: "Successfully updated!",
                data: result
            });
        } catch (e) {
            res.status(400).json(e)
        }
}

module.exports = updateTask;