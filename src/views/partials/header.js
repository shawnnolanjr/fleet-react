import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import '../../css/header.css';
import Button from 'react-bootstrap/lib/Button';

class FleetHeader extends Component {
	render() {
		function someCallback() {
			alert('called back');
		}
		return (
			<div className="FleetHeader">
				<header className="FleetHeader-header">
					<img src={logo} className="logo" alt="logo" />
					<h1 className="title">Welcome to React</h1>
				</header>
				<p className="intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<Button bsStyle="success" bsSize="small" onClick={someCallback}>
					Something
				</Button>
			</div>
		);
	}
}

export default FleetHeader;
