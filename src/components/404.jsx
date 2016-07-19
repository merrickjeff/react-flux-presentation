"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<span className="alert alert-danger"> Whoops - Something went wrong. Please choose a link from the menu above</span>

			</div>

			);
	}

});

module.exports = Main;