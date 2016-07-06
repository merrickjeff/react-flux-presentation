"use strict";

var $, jQuery;
$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/main.jsx');
var Contact = require('./components/contact/contactUs.jsx');
var Cookies = require('./components/cookies/cookiesPage.jsx');

var App = console.log('This function is wired up to log from main.js');
var App = function(){
	var stringggg = 'Dis function ist wirrd up to log from main.js';
	console.log(stringggg);

}();


// ReactDOM.render(<Main/>, document.getElementById('app'));
// ReactDOM.render(<Contact/>, document.getElementById('app2'));
ReactDOM.render(<Cookies/>, document.getElementById('app3'));