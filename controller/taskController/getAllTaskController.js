const jwt = require('jsonwebtoken');
const { Task } = require('../../model/taskModel');
const myTokeKey = 'myTokeKey';

/*Create user handler*/
const getAllTask = async (req, res) => {
    try {
            
            
            const decoded = jwt.verify(req.headers.token, myTokeKey);
            const userData = JSON.parse(JSON.stringify(decoded))
            const userId = userData.user._id;
            const result = await Task.find({userId: userId});
            res.status(200).json({
                message: "Successfully created!",
                data: result
            });
        } catch (e) {
            res.status(400).json(e)
        }
}

module.exports = getAllTask;