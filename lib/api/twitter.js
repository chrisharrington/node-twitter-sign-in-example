"use strict";

var Twitter = require("node-twitter-api"),
	secret = include("secret"),
	Promise = require("bluebird");

module.exports = new function() {
	this._twitter = new Twitter({
		consumerKey: secret.twitter.consumerKey,
		consumerSecret: secret.twitter.consumerSecret,
		callback: secret.twitter.callbackUrl
	});

	this.requestToken = function() {
		return new Promise(function(resolve, reject) {
			this._twitter.getRequestToken(function(err, requestToken, requestSecret) {
				if (err)
					reject(err);
				else {
					this._requestToken = requestToken;
					this._requestSecret = requestSecret;
					resolve(requestToken);
				}
			}.bind(this));
		}.bind(this));
	};

	this.accessToken = function(token, verifier) {
		var secret = this._requestSecret;

		this._verifier = verifier;

		return new Promise(function(resolve, reject) {
			this._twitter.getAccessToken(token, secret, verifier, function(err, accessToken, accessSecret) {
				if (err)
					reject(err);
				else {
					this._accessToken = accessToken;
					this._accessSecret = accessSecret;
					resolve(accessToken);
				}
			});
		}.bind(this));
	};

	this.verifyCredentials = function(accessToken) {
		var accessSecret = this._accessSecret;

		return new Promise(function(resolve, reject) {
			this._twitter.verifyCredentials(accessToken, accessSecret, function(err, user) {
				if (err) reject(err);
				else resolve(user);
			});
		}.bind(this));
	};
};
