
// Replace with your actual username, password, and cluster hostname
const username = 'muhammadboycha';
const password = encodeURIComponent('Imphal@795001');  // Ensure the password is URL-encoded
const hostname = 'todoappclustor.m9muhnm.mongodb.net';
const dbName = 'TodoApp';  // Replace with your actual database name

const uri = `mongodb+srv://${username}:${password}@${hostname}/${dbName}?retryWrites=true&w=majority&appName=TodoAppClustor`;

const clientOptions = { 
  serverApi: { 
    version: '1', 
    strict: true, 
    deprecationErrors: true 
  } 
};
const constantData = {
    mongodbLocal: "mongodb://localhost:27017/TodoApp",
    mongoDbServer: uri,
    clientOptions
    
}
module.exports = constantData;