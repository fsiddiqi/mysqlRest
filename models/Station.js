var db = require('../dbconnection');

var Station = {

    getAllStations: function (callback) {

        return db.query("SELECT * from station", callback);

    },
    getStationById: function (StopID, callback) {

        return db.query("SELECT * FROM station WHERE StopID=?", [StopID], callback);
    },
    addStation: function (Station, callback) {
        console.log("inside service");
        console.log(Station);
        return db.query("INSERT INTO station VALUES (?,?,?)", [
            Station.id, Station.title, Station.status
        ], callback);
    },
    deleteStation: function (id, callback) {
        return db.query("DELETE FROM station WHERE id=?", [id], callback);
    },
    updateStation: function (id, Station, callback) {
        return db.query("UPDATE station SET title=?, status=? WHERE username=?", [
            Station.title, Station.status, id
        ], callback);
    },
    deleteAll: function (item, callback) {

        var delarr = [];
        for (i = 0; i < item.length; i++) {

            delarr[i] = item[i].Id;
        }
        return db.query("DELETE FROM station WHERE id in (?)", [delarr], callback);
    }
};
module.exports = Station;