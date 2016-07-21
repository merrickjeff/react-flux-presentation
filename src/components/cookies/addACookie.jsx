"use strict";

var React = require('react');
var CookiesForm = require('./cookiesForm.jsx');
var CookieActions = require('../../actions/cookieActions.js');
var CookieStore = require('../../stores/cookieStore.js');
var withRouter = require('react-router').withRouter;
var Lifecycle = require('react').Lifecycle;
var toastr = require('toastr');

var AddACookie = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	componentWillMount: function(){
		var cookieId = this.props.params.cookieId;
		if (cookieId) {
			this.setState({cookie: CookieStore.getCookieById(cookieId)});
		}
	},
	componentDidMount: function(){
		var route = this.props.route;
		var router = this.context.router;
		router.setRouteLeaveHook(route, this.routerWillLeave);
	},
	routerWillLeave: function(nextLocation){
		if (this.state.dirty) {
			return 'Are you sure you want to leave?';
		}
	},
	getInitialState: function() {
	    return {
	    	cookie: {
	    		flavor: '',
				  size: ''
				},
				errors: {},
				dirty: false
	    };
	},
	setCookieState: function(event){
		this.state.dirty = true;
		var field = event.target.name;
		var value = event.target.value;
		console.log(field + ' -> ' + value);
		this.state.cookie[field] = value;
		return this.setState({cookie: this.state.cookie,
													dirty: this.state.dirty});
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
		if (this.state.cookie.Id) {
			CookieActions.updateCookie(this.state.cookie);
		}
		else {
			CookieActions.createCookie(this.state.cookie);
		}

		toastr.success('Cookie Saved','',{positionClass:'toast-top-center'});
		this.state.dirty = false;
		this.setState({dirty: this.state.dirty});
		this.props.router.push('cookies'); // without the withRouter func, this line doesn't work.

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