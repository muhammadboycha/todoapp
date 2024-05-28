const jwt = require('jsonwebtoken');
const { Task } = require("../../model/taskModel");
const myTokeKey = 'myTokeKey';

/*Create user handler*/
const statusUpdate = async (req, res) => {
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
             const result = await Task.findOneAndUpdate({_id:taskDetails.id,userId},{taskStatus:taskDetails.status},options)
            res.status(201).json({
                message: "Successfully status updated!",
                data: result
            });
        } catch (e) {
            res.status(400).json(e)
        }
}

module.exports = statusUpdate;