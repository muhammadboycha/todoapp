const { Users } = require("./model/userModel");

const checkUserExistence = async (req, res, next) => {
    try {
      const { email, mobile } = req.body;
  
      // Check if the mobile number already exists
      const userByMobile = await Users.findOne({ mobile,email });
      if (userByMobile) {
        return res.status(400).json({ success: false, message: 'Mobile number already exists' });
      }
  
      // If both checks pass, proceed to the next middleware
      next();
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e.message
    });
    }
  };
  
  module.exports = checkUserExistence;