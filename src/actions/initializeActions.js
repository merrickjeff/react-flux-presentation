"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var actionType = require('../constants/actionTypes');
var CookiesApi = require('../api/cookiesApi');

module.exports = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: actionType.INITIALIZE,
            initialData: {
                cookies: CookiesApi.getAllCookies()
            }
        });
    }
};