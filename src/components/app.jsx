"use strict";

var React = require('react');
var Router = require('react-router').Router;
// var hashHistory = require('react-router').hashHistory;
var routerHistory = require('react-router').useRouterHistory;
var createHistory = require('../../node_modules/react-router/node_modules/history').createHashHistory;
var routes = require('../routes.jsx');
// var RouteHandler = require('react-router').RouteHandler;

var Header = require('./common/header.jsx');

var appHistory = routerHistory(createHistory)({ queryKey: false });

var Main = React.createClass({
	render: function(){
		return (
			<div className="container">
				<Header/>
				<Router history={appHistory}>{routes}</Router>


			</div>

			);
	}

});

module.exports = Main;