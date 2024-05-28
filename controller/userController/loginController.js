const jwt = require('jsonwebtoken');
const myTokeKey = 'myTokeKey';
const {Users} = require(`../../model/userModel`);


/*Create user handler*/
const login = async (req, res) => {
    try {
            const userDetails = req.body;
            // const user = new Users(userDetails)
            // await user.save();
            const user =  await Users.findOne(userDetails);
            if(user){
                const userToken = jwt.sign({user}, myTokeKey, {expiresIn: "180m"} );
                res.status(200).json({
                    message: "User is found ",
                    data: user,
                    token: userToken,
                });
            } else {
                res.status(200).json({
                    message: "User Not found ",
                    data: user
                });
            }
            
            
        } catch (e) {
            res.status(400).json(e)
        }
}

module.exports = login;