"use strict";

var React = require('react');
var Link = require('react-router').Link;
var CookieActions = require('../../actions/cookieActions.js');
var toastr = require('toastr');

var CookieList = React.createClass({
	propTypes: {
		cookies: React.PropTypes.array.isRequired
	},

	deleteCookie: function(id, event) {
		event.preventDefault();
		CookieActions.deleteCookie(id);
		toastr.success('Cookie Deleted','',{positionClass:'toast-top-center'});

	},
	
	render: function(){
		var createCookieRow = function(cookie){
			return (
				<tr key={cookie.id}>
				<td><a href="#" onClick={this.deleteCookie.bind(this, cookie.id)}>Delete</a></td>
					<td>
						<Link to={"/addACookie/" + cookie.id}>{cookie.id}</Link>
					</td>
					<td>{cookie.flavor}</td>
					<td>{cookie.size}</td>
				</tr>
				);
		};
		return (
			<div style={{backgroundColor: "lightcyan"}}>
				<h2>Cookies List</h2>
				<table className="table">
					<thead>
						<tr>
							<th></th>
							<th>ID</th>
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