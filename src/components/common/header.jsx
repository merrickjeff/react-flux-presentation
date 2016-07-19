"use strict";

var React = require('react');
// var Link = require('react-router').Link;


var Header = React.createClass({
	render: function() {
		return (
			<div>
				<div className="page-header">
					<ul>
						<li>
							<a href="#/">Main page</a><br/>
						</li>
						<li>
							<a href="#/cookies">Cookies page</a><br/>
						</li>	
						<li>
							<a href="#/contact">Contact Us page</a><br/>
						</li>	
					</ul>
				</div>
				{
				// <Link to="/cookies">Link to Cookies</Link><br/>
				// <Link to="/contact">Link to Contact Us</Link>
				}
			</div>
		);
	}

});


module.exports = Header;