"use strict";

var React = require('react');
var CookiesForm = require('./cookiesForm.jsx');

var ManageCookies = React.createClass({
	render: function() {
		return (
			<div>
				<CookiesForm/>
			</div>
		);
	}

});


module.exports = ManageCookies;