"use strict";

var $, jQuery;
$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/main.jsx');

var App = console.log('This function is wired up to log from main.js');
var App = function(){
	let stringggg = 'Dis function is wired up to log from main.js';
	console.log(stringggg);

}();


ReactDOM.render(<Main/>, document.getElementById('app'));


