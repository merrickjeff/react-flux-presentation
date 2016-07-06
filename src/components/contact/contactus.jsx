"use strict";

var React = require('react');

var Contact = React.createClass({
	render: function(){
		return (
			<div style={{backgroundColor: "lightblue"}}>
				<h2>This is the Contact component</h2>
				<p>This is preformatted</p>
				<a href="/index">index</a>
				<br/>
				Click below to send us an email:<br/>
				<a href="mailto:help@me.com?Subject=I%20Need%20Help">Click Here!</a>
			</div>

			);
	}

});

module.exports = Contact;