var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myApp');

exports.mongoose = mongoose;