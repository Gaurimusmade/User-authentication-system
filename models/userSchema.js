const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
    Name: { type: String, require: true },
    username: { type: String, require: true },
    bio: { type: String, require: true },
    age: { type: Number, require: true },
    password: { type: String, require: true }
})
const Users = mongoose.model('Users', UsersSchema);
module.exports = Users;