"use strict";

var React = require('react');

var Contact = React.createClass({
	getDefaultProps: function(){
		return {
			propOne: 'I\'ma prop one !!!111111',
			propTwo: 'I am prop two !!!22222two222'
		};
	},
	render: function(){
		var renderProps = function(propObject){
			var returnVar = [];
			for (var key in propObject){
				if (propObject.hasOwnProperty(key) && typeof(propObject[key]) == 'string'){
					console.log(key + " -> " + propObject[key]);
					// debugger;
					returnVar.push(<li key={key}>{propObject[key]}</li>);
				}
			}
			return returnVar;
		};
		return (
			<div style={{backgroundColor: "lightblue"}}>
				<h2>This is the Contact component</h2>
				<a href="/">index</a>
				<br/>
				Click below to send us an email:<br/>
				<a href="mailto:help@me.com?Subject=I%20Need%20Help">Click Here!</a>
				<h4>Here are all the string props</h4>
				<ul>
					{renderProps(this.props)}
				</ul>
			</div>

			);
	}

});

module.exports = Contact;