import React, { Component } from 'react';
import Weather from './Weather.js';

class Search extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			query: null
		}
		
		this.updateQuery = this.updateQuery.bind(this);
		this.search      = this.search.bind(this);
	}
	
	updateQuery(event) {
		this.setState({ query: event.target.value });
	}
	
	search(event) {
		event.preventDefault();
		
		if (this.state.query)
			fetch('http://localhost:8000?query=' + this.state.query)
				.then(function(response) { return response.json(); })
				.then(weather => this.setState(weather))
	}
	
	render() {
		return (
			<React.Fragment>
				{
					this.state.location &&
					<Weather
						name={this.state.name}
						temperature={this.state.temperature}
						icon={this.state.icon}
						location={this.state.location}
					/>
				}
				<form onSubmit={this.search}>
					<input onChange={this.updateQuery} placeholder="Wpisz miasto, np. Berlin" />
					<input type="submit" />
				</form>
			</React.Fragment>
		)
	}
}

export default Search;