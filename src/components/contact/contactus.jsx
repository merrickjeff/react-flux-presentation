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
				Click <a href="mailto:help@me.com?Subject=I%20Need%20Help">HERE</a> to send us an email:<br/>
				<h4>Here are all the default string props</h4>
				<ul>
					{renderProps(this.props)}
					<li> 
						{"Query String asdf = " + this.props.location.query.asdf} 
					</li>
					<li> 
						{"param1 = " + this.props.params.param1} 
					</li>
				</ul>
			</div>

			);
	}

});

module.exports = Contact;