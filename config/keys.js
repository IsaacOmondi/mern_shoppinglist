const dotenv = require('dotenv')
dotenv.config();

module.exports = {
    mongoURI: 'mongodb+srv://'+process.env.USERNAME+':'+process.env.PASSWORD+'@mern-shopping-list-xpm85.mongodb.net/test?retryWrites=true'
};