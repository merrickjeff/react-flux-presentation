"use strict";

var React = require('react');
var CookieApi = require('../../api/cookiesApi');


var Cookie = React.createClass({
	getInitialState: function(){
		return {
			cookies: []
		};
	},

	componentDidMount: function() {
		this.setState({cookies: CookieApi.getAllCookies()});
	},
	render: function(){
		var createCookieRow = function(cookie){
			return (
				<tr key={cookie.id}>
					<td><a href={"/cookie" + cookie.id}>{cookie.id}</a></td>
					<td>{cookie.flavor} {cookie.size}</td>
				</tr>
				);
		};
		return (
			<div style={{backgroundColor: "lightcyan"}}>
				<h2>Here are the cookies we know about</h2>
				<table className="table">
					<thead>
						<tr>
							<th>Flavor</th>
							<th>Size</th>
						</tr>
					</thead>
					<tbody>
						{this.state.cookies.map(createCookieRow, this)}
					</tbody>
				</table>
			</div>

			);
	}

});

module.exports = Cookie;