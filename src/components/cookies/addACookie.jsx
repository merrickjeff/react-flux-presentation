"use strict";

var React = require('react');
var CookiesForm = require('./cookiesForm.jsx');
var CookieApi = require('../../api/cookiesApi');
var withRouter = require('react-router').withRouter;
var toastr = require('toastr');

var AddACookie = React.createClass({
	getInitialState: function() {
	    return {
	    	cookie: {
	    		flavor: '',
				  size: ''
				},
				errors: {}
	    };
	},
	setCookieState: function(event){
		var field = event.target.name;
		var value = event.target.value;
		console.log(field + ' -> ' + value);
		this.state.cookie[field] = value;
		return this.setState({cookie: this.state.cookie});
	},
	cookieFormIsValid: function(){
		var formIsValid = true;
		this.state.errors = {};

		if (this.state.cookie.flavor.length < 3){
			this.state.errors.flavor = 'Flavor must be at least 3 characters';
			formIsValid = false;
		}

		if (this.state.cookie.size.length < 3){
			this.state.errors.size = 'Size must be at least 3 characters';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	},	
	saveCookie: function(event){
		event.preventDefault();

		if (!this.cookieFormIsValid()) {
			return;
		}

		CookieApi.saveCookie(this.state.cookie);
		toastr.success('Cookie Saved','',{positionClass:'toast-top-center'});
		this.props.router.push('cookies');

	},
	render: function() {
		return (
			<div>
				<CookiesForm
				  cookie={this.state.cookie}
				  onChange={this.setCookieState}
				  saveCookie={this.saveCookie}
				  errors={this.state.errors}/>
			</div>
		);
	}

});


module.exports = withRouter(AddACookie);