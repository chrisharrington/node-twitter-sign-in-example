"use strict";

var twitter = include("api/twitter");

module.exports = function(app) {
    app.get("/access-token", function(req, res) {
        var token = req.query.oauth_token,
			verifier = req.query.oauth_verifier;

        twitter.accessToken(token, verifier).then(function(accessToken) {
            return twitter.verifyCredentials(accessToken);
        }).then(function(user) {
            res.send(user);
        }).catch(function(err) {
            res.status(500).send(err);
        });
    });
};
