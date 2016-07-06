"use strict";

//This file is mocking a web API by hitting hard coded data.
var cookies = require('./cookieData').cookies;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(cookie) {
	return cookie.flavor.toLowerCase() + '-' + cookie.size.toLowerCase();
};

var _clone = function(item) {
	//return cloned copy so that the item is passed by value instead of by reference
	return JSON.parse(JSON.stringify(item)); 
};

var CookieApi = {
	getAllCookies: function() {
		return _clone(cookies); 
	},

	getCookieById: function(id) {
		var cookie = _.find(cookies, {id: id});
		return _clone(cookie);
	},
	
	saveCookie: function(cookie) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the cookie to the DB via AJAX call...');
		
		if (cookie.id) {
			var existingCookieIndex = _.indexOf(cookies, _.find(cookies, {id: cookie.id})); 
			cookies.splice(existingCookieIndex, 1, cookie);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new cookies in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			cookie.id = _generateId(cookie);
			cookies.push(cookie);
		}

		return _clone(cookie);
	},

	deleteCookie: function(id) {
		console.log('Pretend this just deleted the cookie from the DB via an AJAX call...');
		_.remove(cookies, { id: id});
	}
};

module.exports = CookieApi;