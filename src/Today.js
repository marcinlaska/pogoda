import React, { Component } from 'react';
import Weather from './Weather.js';

class Today extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'brak danych',
			temperature: 0,
			icon: 'cooltext325681204283567.png'
		};
	}
	
	fetch() {
		if (this.state.name == 'brak danych')
			navigator.geolocation.getCurrentPosition(position =>
				fetch('http://localhost:8000/today.php?latitude=' + position.coords.latitude + '&longitude=' + position.coords.longitude)
					.then(function(response) { return response.json(); })
					.then(weather => this.setState(weather))
			);
	}
			
	render() {
		this.fetch();
		return (
			<React.Fragment>
				<Weather
					name={this.state.name}
					temperature={this.state.temperature}
					icon={this.state.icon}
					location={this.state.location}
				/>
			</React.Fragment>
		)
	}
}

export default Today;