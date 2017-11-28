var db = require('../dbconnection');

var Task = {

    getAllTasks: function (callback) {

        return db.query("SELECT * from task", callback);

    },
    getTaskById: function (id, callback) {

        return db.query("SELECT * FROM task WHERE id=?", [id], callback);
    },
    addTask: function (Task, callback) {
        console.log("inside service");
        console.log(Task);
        return db.query("INSERT INTO task VALUES (?,?,?)", [
            Task.id, Task.title, Task.status
        ], callback);
    },
    deleteTask: function (id, callback) {
        return db.query("DELETE FROM task WHERE id=?", [id], callback);
    },
    updateTask: function (id, Task, callback) {
        return db.query("UPDATE task SET title=?, status=? WHERE id=?", [
            Task.title, Task.status, id
        ], callback);
    },
    deleteAll: function (item, callback) {

        var delarr = [];
        for (i = 0; i < item.length; i++) {

            delarr[i] = item[i].Id;
        }
        return db.query("DELETE FROM task WHERE id in (?)", [delarr], callback);
    }
};
module.exports = Task;