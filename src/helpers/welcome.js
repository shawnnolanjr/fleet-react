import React, { Component } from 'react';

class Welcome extends Component {
	render() {
		const props = this.props;
		return (<h1>Hello, {props.name}</h1>);
	}
}

export default Welcome;
