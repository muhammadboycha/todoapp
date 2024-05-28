
const {Users} = require(`../../model/userModel`);


/*Create user handler*/
const createUser = async (req, res) => {
    try {
            const userDetails = req.body;
            const user = new Users(userDetails);
            await user.save();
            res.status(201).json({
                message: "Successfully created!",
                data: user
            });

        } catch (e) {
            res.status(400).json(e)
        }
}

module.exports = createUser;