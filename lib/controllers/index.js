"use strict";

var _ = require("lodash");

module.exports = function(app) {
    _.each([
        "request-token",
        "access-token"
    ], function(controller) {
        require("./sign-in/" + controller)(app);
    });
};
