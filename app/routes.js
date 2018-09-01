//var Nerd = require('./models/nerd');
var path = require('path');

module.exports = function(app) {

        var MongoClient = require('mongodb').MongoClient;
        /*var url = "mongodb://localhost:27017/";*/
        var url = "mongodb://Cdac:Cdac@123@ds229312.mlab.com:29312";

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/nerds', function(req, res) {
            // use mongoose to get all nerds in the database


            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("cdac");
                dbo.collection("ntpl").find({}).toArray(function(err, result) {
                    if (err) throw err;
                    res.send(result);
                    db.close();
                });
            });

        });

        app.get('/api/state/:id', function(req, res) {
            // use mongoose to get all nerds in the database
            var countryId = parseInt(req.params.id);
            console.log(countryId)
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("cdac");
                dbo.collection("state").find({ countryId: countryId }).toArray(function(err, result) {
                    if (err) throw err;
                    res.send(result);
                    db.close();
                });
            });

        });
        app.get('/api/city/:id', function(req, res) {
            // use mongoose to get all nerds in the database
            var stateId = parseInt(req.params.id);
            console.log(stateId)
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("cdac");
                dbo.collection("city").find({ stateId: stateId }).toArray(function(err, result) {
                    if (err) throw err;
                    res.send(result);
                    db.close();
                });
            });

        });

        app.get('/api/user/:city', function(req, res) {
            // use mongoose to get all nerds in the database
             /*if (queryObject.hasOwnProperty("host") && queryObject.status == "true") {
      queryObject.status = queryObject.status.split(",");
    }*/

            console.log("route call hua")
            var name = {};
            name["city.cityName"] = req.params.city;
            name.host=true;
            console.log(req.params)
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("cdac");
                console.log(name)
                dbo.collection("ntpl").find(name).toArray(function(err, result) {
                    if (err) throw err;
                    res.send(result);
                    db.close();
                });
            });

        });

        app.post('/api/login', function(req, res) {
            // use mongoose to get all nerds in the database
            console.log("route call hua")
            var loginData = req.body;
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("cdac");
                dbo.collection("ntpl").find(loginData).toArray(function(err, result) {
                    console.log(result.length);
                    if (err) throw err;
                    if (result.length === 1) {
                        console.log("hello");
                        //result.data="200"
                        console.log(result)
                        res.send(result)
                    } else {

                        res.send("309");
                        db.close();
                    }
                });
            });

        });
        app.get('/api/country', function(req, res) {
            // use mongoose to get all nerds in the database
            console.log("route called");

            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("cdac");
                dbo.collection("country").find({}).toArray(function(err, result) {
                    if (err) throw err;
                    res.send(result);
                    db.close();
                });
            });

        });

        app.post('/api/signup', function(req, res) {
            /*res.sendfile('./public/views/index.html');*/ // load our public/index.html file
            var datatoInsert = req.body;
            console.log(datatoInsert);
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("cdac");
                // var myobj = { name: "Company Inc", address: "Highway 37" };

                dbo.collection("ntpl").findOne({ email: datatoInsert.email }, function(err, result) {
                    if (result == undefined) {
                        console.log("condation called");
                        dbo.collection("ntpl").insert(datatoInsert, function(user) {
                            console.log(user);

                            res.send("200");
                        });
                    } else {

                        res.send("309")
                    }
                });




            });

        });


        app.put('/api/update', function(req, res) {
                var datatoInsert = req.body;
                MongoClient.connect(url, function(err, db) {
                    if (err) throw err;
                    var dbo = db.db("cdac");
                    var myquery = { id: req.body.id };
                    var newvalues = { $set: { datatoInsert } };
                    dbo.collection("ntpl").updateOne(myquery, newvalues, function(err, result) {
                        if (err) throw err;
                        res.send("200");
                    });
                });

            });

            // route to handle creating goes here (app.post)
            // route to handle delete goes here (app.delete)

            // frontend routes =========================================================
            // route to handle all angular requests
            app.get('*', function(req, res) {
                res.sendfile(path.resolve('public/index.html')); // load our public/index.html file
                //res.sendfile('./public/views/index.html'); 
            });

        };