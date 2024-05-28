const jwt = require('jsonwebtoken');
const { Task } = require("../../model/taskModel");
const myTokeKey = 'myTokeKey';

/*Create user handler*/
const deleteTask = async (req, res) => {
    try {
            const taskDetails = req.body;
            const token = req.header.token;
            // const task = new Task(taskDetails)
            // await task.save();
            console.log(taskDetails, req.headers.token);
            
            const decoded = jwt.verify(req.headers.token, myTokeKey);
            console.log( "DECODE JWT: ",JSON.parse(JSON.stringify(decoded)));
            const userData = JSON.parse(JSON.stringify(decoded))
            const userId = userData.user._id;
             // Options for the update operation
        const options = {
            new: true, // Return the updated document
            runValidators: true // Validate the update against the schema
        };
        
             const result = await Task.findOneAndUpdate({_id:taskDetails.id,userId},{isDeleted:true},options)
            res.status(201).json({
                message: "Successfully deleted",
                data: result
            });
        } catch (e) {
            console.log('E', e);
            res.status(400).json(e)
        }
}

module.exports = deleteTask;