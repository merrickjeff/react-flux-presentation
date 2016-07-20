"use strict";

var React = require('react');
var CookiesForm = require('./cookiesForm.jsx');

var ManageCookies = React.createClass({
	getInitialState: function() {
	    return {
	    	cookie: {
	    		flavor: '',
				  size: ''
				}
	    };
	},
	setCookieState: function(event){
		var field = event.target.name;
		var value = event.target.value;
		console.log(field + ' -> ' + value);
		this.state.cookie[field] = value;
		return this.setState({cookie: this.state.cookie});
	},
	render: function() {
		return (
			<div>
				<CookiesForm cookie={this.state.cookie} onChange={this.setCookieState}/>
			</div>
		);
	}

});


module.exports = ManageCookies;