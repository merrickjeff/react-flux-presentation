"use strict";
var Dispatcher = require('../dispatcher/appDispatcher');
var CookiesApi = require('../api/cookiesApi');
var ActionTypes = require('../constants/actionTypes');

var CookieActions = {
    createCookie: function(cookie) {
        var newCookie = CookiesApi.saveCookie(cookie);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_COOKIE,
            cookie: newCookie
        });
    },

    updateCookie: function(cookie) {
        var updateCookie = CookiesApi.saveCookie(cookie);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_COOKIE,
            cookie: updateCookie
        });
    },

    deleteCookie: function(id) {
        CookiesApi.deleteCookie(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.ActionTypes.DELETE_COOKIE,
            id: id
        });
    }
};

module.exports = CookieActions;