import React, { Component } from 'react';

class Weather extends Component {
	render() {
		return (
			<React.Fragment>
				{this.props.location && <h1>Pogoda dla: {this.props.location}</h1>}
				<img src={this.props.icon} width="200" alt="ikona pogody" />
				<p>
					{this.props.name}, {this.props.temperature}&#176;C.
				</p>
			</React.Fragment>
		)
	}
}

export default Weather;