"use strict";

var React = require('react');

var CookieList = React.createClass({
	propTypes: {
		cookies: React.PropTypes.array.isRequired
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
						{this.props.cookies.map(createCookieRow, this)}
					</tbody>
				</table>
			</div>

			);
	}

});

module.exports = CookieList;