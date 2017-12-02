var db = require('../dbconnection');
var fs = require('fs');
var User = {
    getUser: function (User, callback) {

        return db.query("SELECT * FROM User WHERE username=? AND password=?", [
            User.username, User.password
        ], callback);
    },
    deleteUser: function (User, callback) {
        return db.query("DELETE FROM User WHERE username=?", [User.username], callback);
    },
    addUser: function (User, callback) {
        return db.query("INSERT INTO User (username, password) VALUES(?,?)", [
            User.username, User.password
        ], callback);
    }
};
module.exports = User;