"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var INITIALIZE = require('../constants/actionTypes');
var CookiesApi = require('../api/cookiesApi');

module.exports = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: INITIALIZE,
            initialData: {
                cookies: CookiesApi.getAllCookies()
            }
        });
    }
};