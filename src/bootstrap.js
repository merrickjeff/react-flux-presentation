"use strict";

// var $, jQuery;
// $ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
// var Main = require('./components/main.jsx');
// var Contact = require('./components/contact/contactUs.jsx');
// var Cookies = require('./components/cookies/cookiesPage.jsx');
// var Router = require('react-router').Router;
// var routes = require('./routes.jsx');
// var browserHistory = require('react-router').browserHistory;
// var hashHistory = require('react-router').hashHistory;
var App = require('./components/app.jsx');


// console.log('This function is wired up to log from bootstrap.js');
// var App = function(){
// 	var stringggg = 'Dis function ist wirrd up to log from bootstrap.js';
// 	console.log(stringggg);
// }();


// ReactDOM.render(<Cookies/>, document.getElementById('app'));

// Router.run(Routes, function(Handler){
// 	ReactDOM.render(<Handler/>, document.getElementById('app'));
// });

// ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('app'));
// ReactDOM.render(<Main/>, document.getElementById('app'));
ReactDOM.render(<App/>, document.getElementById('app'));