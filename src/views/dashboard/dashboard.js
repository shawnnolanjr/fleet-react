import React, { Component } from 'react';
import '../../css/dashboard.css';
import Welcome from '../../helpers/welcome';

class Dashboard extends Component {
	render() {
		let names = [
			'shawn',
			'ryder',
			'chase'
		];
		return (
			<div className="Dashboard">
				<div className="container">
					<div className="row">
						{names.map(function(object, i){
							return <div className="col-md-12"><Welcome name={object} /></div>;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
