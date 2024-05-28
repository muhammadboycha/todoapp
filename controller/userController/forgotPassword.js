

const jwt = require('jsonwebtoken');
const myTokeKey = 'myTokeKey';
const {Users} = require(`../../model/userModel`);
const sendCustomMail = require('../../sendCustomMail');


/*Create user handler*/
const forgotPassword = async (req, res) => {
    try {
            const userDetails = req.body;
            console.log("Hello",userDetails);
            // const user = new Users(userDetails)
            // await user.save();
            const user =  await Users.findOne(userDetails);
            console.log("user detials",user);
            
            if(user?.name && user?.mobile){
               console.log("Hello details",user.name,user.mobile);
                const toMail = userDetails.email;
                const emailSentResponse = await sendCustomMail(toMail,user.name,user.mobile)
                res.status(200).json({
                    message: "Your login credentials has been successfully sent to your email.",
                    data: null,
                    success:true
                });
            } else {
                res.status(200).json({
                    message: "User Not found ",
                    data: null,
                    success:false
                });
            }
            
            
        } catch (e) {
            console.log(e);
            res.status(400).json(e)
        }
}

module.exports = forgotPassword;