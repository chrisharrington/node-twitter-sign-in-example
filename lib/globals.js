"use strict";

global.include = function(location) {
	return require(__dirname + "/" + location);
};
