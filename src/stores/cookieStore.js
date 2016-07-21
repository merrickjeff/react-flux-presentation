"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
// var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _cookies = [];

var CookieStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getAllCookies: function() {
        return _cookies;
    },

    getCookieById: function(id) {
        for (var i in _cookies) {
            if (_cookies[i].id === id) return _cookies[i];
        }
    }
});

Dispatcher.register(function (action) {
    var existingCookieIndex = -1;

    switch(action.actionType) {
        case ActionTypes.INITIALIZE:
            _cookies = action.initialData.cookies;
            CookieStore.emitChange();
            break;
        case ActionTypes.CREATE_COOKIE:
            _cookies.push(action.cookie);
            CookieStore.emitChange();
            break;
        case ActionTypes.UPDATE_COOKIE:
            for (var i in _cookies) {
                if (_cookies[i].id === action.cookie.id) {
                    existingCookieIndex = i;
                    break;
                }
            }
            if (existingCookieIndex > -1) {
                _cookies.splice(existingCookieIndex, 1, action.cookie);
                CookieStore.emitChange();
            }
            break;
        case ActionTypes.DELETE_COOKIE:
            for (var j in _cookies) {
                if (_cookies[j].id === action.id) {
                    existingCookieIndex = j;
                    break;
                }
            }
            if (existingCookieIndex > -1) {
                _cookies.splice(existingCookieIndex, 1);
                CookieStore.emitChange();
            }
    }
});

module.exports =  CookieStore;