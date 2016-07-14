"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
	<Route name="app" path="/" handler={require('./components/main')}>
		<DefaultRoute handler={require('./components/homePage')} />
		<Route name="cookies" handler={require('./components/cookies/cookiesPage')}/>
		<Route name="contact" handler={require('./components/contact/contactus')}/>
	</Route>
	
);

module.exports = routes;