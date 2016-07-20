"use strict";

var React = require('react');
var CookiesForm = require('./cookiesForm.jsx');
var CookieApi = require('../../api/cookiesApi');
var withRouter = require('react-router').withRouter;

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
	saveCookie: function(event){
		event.preventDefault();
		CookieApi.saveCookie(this.state.cookie);
		this.props.router.push('cookies');

	},
	render: function() {
		return (
			<div>
				<CookiesForm
				  cookie={this.state.cookie}
				  onChange={this.setCookieState}
				  saveCookie={this.saveCookie}/>
			</div>
		);
	}

});


module.exports = withRouter(ManageCookies);