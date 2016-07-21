"use strict";

var React = require('react');
// var CookiesApi = require('../../api/cookiesApi');
var CookieStore = require('../../stores/cookieStore.js');
var CookieList = require('./cookiesList.jsx');
var Link = require('react-router').Link;


var CookiePage = React.createClass({
	getInitialState: function(){
		return {
			cookies: CookieStore.getAllCookies()
		};
	},

	componentWillMount: function() {
		CookieStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		CookieStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({cookies: CookieStore.getAllCookies()});
	},

	render: function() {
		return (
			<div>
				<CookieList cookies={this.state.cookies}/>
				<br/>
				<Link to="/addACookie" className="btn btn-info btn-lg">Add A Cookie</Link><br/>

			</div>
		);
	}

});


module.exports = CookiePage;