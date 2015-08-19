"use strict";

var twitter = include("api/twitter"),
    secret = include("secret");

module.exports = function(app) {
    app.get("/request-token", function(req, res) {
        twitter.requestToken().then(function(requestToken) {
            res.send(requestToken);
        }).catch(function(err) {
            res.status(500).send(err);
        });
    });
};
