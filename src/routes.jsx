"use strict";

var React = require('react');
// var Router = require('react-router').Router;
var Route = require('react-router').Route;
// var Link = require('react-router').Link;
// var browserHistory = require('react-router').browserHistory;

var routes = (
	<div>
		<Route path="/" component={require('./components/main.jsx')}/>
		<Route path="/cookies" component={require('./components/cookies/cookiesPage.jsx')}/>
		<Route path="/cookies/:cookieId" component={require('./components/cookies/cookiesPage.jsx')}/>
		<Route path="/manageCookies" component={require('./components/cookies/manageCookies.jsx')}/>
		<Route path="/contact" component={require('./components/contact/contactus.jsx')}/>
		<Route path="/contact/:param1" component={require('./components/contact/contactus.jsx')}/>
		<Route path="*" component={require('./components/404.jsx')}/>
	</div>
	
);

module.exports = routes;