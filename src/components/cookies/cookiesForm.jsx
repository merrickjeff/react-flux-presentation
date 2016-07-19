"use strict";

var React = require('react');

var CookiesForm = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Manage Cookies</h1>
				<form>
					<h3>Enter a new cookie</h3>
					<label htmlFor="flavor">Flavor</label>
					<input type="text" 
						name="flavor"
						className="form-control"
						placeholder="Flavor"
						ref="flavor"
						value="" />
						<br/>

					<label htmlFor="size">Size</label>
					<input type="text"
						name="size"
						className="form-control"
						placeholder="Size"
						ref="size"
						value=""/>
					<br/>

					<input type="submit" value="Save" className="btn btn-info"/>
				</form>

			</div>
		);
	}

});


module.exports = CookiesForm;