"use strict";

var React = require('react');

var Main = React.createClass({
	render: function(){
		return (
			<div className="jumbotron">
				<h1>This is the Main component</h1>
				<p>This is a p tag in the main react component.</p>
			</div>

			);
	}

});

module.exports = Main;