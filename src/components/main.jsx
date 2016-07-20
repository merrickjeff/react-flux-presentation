"use strict";

var React = require('react');
// var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<h2>Please choose a link from the navigation menu above</h2>
				{
					// <a href="#/cookies">Cookies page</a><br/>
					// <a href="#/contact">Contact Us page</a><br/>
					// <Link to="/cookies">Link to Cookies</Link><br/>
					// <Link to="/contact">Link to Contact Us</Link>
				}

			</div>

			);
	}

});

module.exports = Main;