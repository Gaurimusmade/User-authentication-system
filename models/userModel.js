const bcrypt = require('bcryptjs');
const db = require('./db');
const Users = require('./userSchema');

module.exports.allUsers = async () => {
    const users = await Users.find({});
    return users;
}

module.exports.getUserById = async (id) => {
    const user = await Users.findById(id);
    return user;
}

module.exports.isUsernameExists = async (username) => {
    try {
        const user = await Users.findOne({ username: username });
        if (user == null) return false;
        return true;
    } catch (err) {
        throw new Error(err);
    }
}

module.exports.newUser = async (userData) => {
    try {
        const newUser = new Users(userData);
        await newUser.save();
        return true;
    } catch (err) {
        throw new Error(err);
    }
}



module.exports.varifyUser = async (username, password) => {
    try {
        const result = await Users.findOne({ username: username });
        if (result.length > 0) {
            let flag = bcrypt.compare(password, result[0].password);
            if (flag) {
                return result[0];
            }
            else {
                return [];
            }
        }
        return [];
    } catch (err) {
        throw new Error(err);
    }

}

module.exports.updateUser = async (id, data) => {
    try {
        const user = await Users.findByIdAndUpdate(id, data, { runValidators: true });
        return true;
    } catch (err) {
        throw new Error(err);
    }
}

module.exports.deleteUser = async (id) => {
    try {
        const deleteUser = await Users.findByIdAndDelete(id);
        return true;
    } catch (err) {
        throw new Error(err);
    }
}

