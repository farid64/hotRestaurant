var mysql = require("mysql");
var bodyParser = require("body-parser");
var path = require("path");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "hot_restaurantDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllSongs();
    queryDanceSongs();
});

function addRestaurants() {
    var query = "INSERT INTO hot_restaurants (hot_restaurants.uniqueID, hot_restaurants.OwnerName, hot_restaurants.Phonenumber, hot_restaurants.EmailID) ";
    query += "VALUES (?,?,?,?)";

    connection.query(query, function(err, res) {
        if(res.length > 0 ){
            console.log(res.length + " matches found!");
        }

    }
    var outputRestaurants = JSON.stringify(res);
}

function getRestaurants() {
            var query = "SELECT hot_restaurants.uniqueID, hot_restaurants.OwnerName, hot_restaurants.Phonenumber, hot_restaurants.EmailID ";
            query += "FROM hot_restaurants ";

            connection.query(query, function(err, res) {
                console.log(res.length + " matches found!");
                for (var i = 0; i < res.length; i++) {
                    console.log(
                        "uniqueID: " +
                        res[i].uniqueID +
                        " || OwnerName: " +
                        res[i].OwnerName +
                        " || Phonenumber: " +
                        res[i].Phonenumber +
                        " || EmailID: " +
                        res[i].EmailID
                    )};

            }
    var outputRestaurants = JSON.stringify(res);
}

function waitRestaurants() {
    var query = "SELECT hot_restaurants_waitlist.uniqueID, hot_restaurants_waitlist.OwnerName, hot_restaurants_waitlist.Phonenumber, hot_restaurants_waitlist.EmailID ";
    query += "FROM hot_restaurants_waitlist ";

    connection.query(query, function(err, res) {
        console.log(res.length + " matches found!");
        for (var i = 0; i < res.length; i++) {
            console.log(
                "uniqueID: " +
                res[i].uniqueID +
                " || OwnerName: " +
                res[i].OwnerName +
                " || Phonenumber: " +
                res[i].Phonenumber +
                " || EmailID: " +
                res[i].EmailID
            )};

    }
    var waitRestaurants = JSON.stringify(res);
}
