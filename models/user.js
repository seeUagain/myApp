var mongoose = require('../config/config').mongoose;

var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: String,
    password: String
});

exports.UserEntity = mongoose.model('users', userSchema);