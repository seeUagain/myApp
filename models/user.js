var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: string,
    password: string
});
exports.user = mongoose.model('users', userSchema);