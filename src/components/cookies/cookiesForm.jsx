"use strict";

var React = require('react');
var TextInput = require('../common/textInput.jsx');

var CookiesForm = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Manage Cookies</h1>
				<form>
					<h3>Enter a new cookie</h3>
					<TextInput
						name="flavor"
						label="Flavor"
						value={this.props.cookie.flavor}
						onChange={this.props.onChange}/>

					<TextInput
						name="size"
						label="Size"
						value={this.props.cookie.size}
						onChange={this.props.onChange}/>

					<input type="submit" value="Save" onClick={this.props.saveCookie} className="btn btn-info"/>
				</form>

			</div>
		);
	}

});


module.exports = CookiesForm;