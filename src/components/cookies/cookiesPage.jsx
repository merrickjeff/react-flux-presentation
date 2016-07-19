"use strict";

var React = require('react');
var CookieApi = require('../../api/cookiesApi');
var CookieList = require('./cookiesList.jsx');
var Link = require('react-router').Link;


var CookiePage = React.createClass({
	getInitialState: function(){
		return {
			cookies: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()){
			this.setState({cookies: CookieApi.getAllCookies()});
		}
	},

	render: function() {
		return (
			<div>
				<CookieList cookies={this.state.cookies}/>
				<br/>
				<Link to="/manageCookies" className="btn btn-info btn-lg">Manage Cookies</Link><br/>

			</div>
		);
	}

});


module.exports = CookiePage;