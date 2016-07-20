"use strict";

var React = require('react');
var TextInput = require('../common/textInput.jsx');

var CookiesForm = React.createClass({
	propTypes: {
		cookie: React.PropTypes.object.isRequired,
		saveCookie: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},
	render: function() {
		return (
			<div>
				<form>
					<h3>Enter a new cookie</h3>
					<TextInput
						name="flavor"
						label="Flavor"
						value={this.props.cookie.flavor}
						onChange={this.props.onChange}
						error={this.props.errors.flavor}/>

					<TextInput
						name="size"
						label="Size"
						value={this.props.cookie.size}
						onChange={this.props.onChange}
						error={this.props.errors.size}/>

					<input type="submit" value="Save" onClick={this.props.saveCookie} className="btn btn-info"/>
				</form>

			</div>
		);
	}

});


module.exports = CookiesForm;