"use strict";

var React = require('react');
// var Link = require('react-router').Link;


var Header = React.createClass({
	render: function() {
		return (
			<div>
				<div className="page-header">
							<a href="#/" className="btn btn-info btn-lg">Main</a> &nbsp;
							<a href="#/cookies" className="btn btn-info btn-lg">Cookies</a> &nbsp;
							<a href="#/contact" className="btn btn-info btn-lg">Contact Us</a> &nbsp;
				</div>
				{
				// <Link to="/cookies">Link to Cookies</Link><br/>
				// <Link to="/contact">Link to Contact Us</Link>
				}
			</div>
		);
	}

});


module.exports = Header;