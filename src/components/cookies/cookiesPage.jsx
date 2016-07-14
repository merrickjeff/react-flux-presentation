"use strict";

var React = require('react');
var CookieApi = require('../../api/cookiesApi');
var CookieList = require('./cookiesList.jsx');


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
			</div>
		);
	}

});


module.exports = CookiePage;