const moongose = require('mongoose');
const Schema = moongose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    userName: String,
});

module.exports = moongose.model('User', userSchema);

