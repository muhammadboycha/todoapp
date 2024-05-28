const mongoose = require('mongoose');
const constantData = require('./constant');

const connect = async() => {
   
  mongoose.connect(constantData.mongoDbServer,constantData.clientOptions).then(()=> {
            console.log("DB Connected !!!")
        })
        .catch(err => {
            console.log("DB Connection Failed. Error : ",err);
        })
}

module.exports = {connect}
