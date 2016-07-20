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
					<TextInput name="Flavor" label="Flavor" placeHolder="Flavor" onChange={this.props.onChange}/>

					<TextInput name="Size" label="Size" placeHolder="Size" onChange={this.props.onChange}/>

					<input type="submit" value="Save" className="btn btn-info"/>
				</form>

			</div>
		);
	}

});


module.exports = CookiesForm;