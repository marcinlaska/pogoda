import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Search from './Search.js';
import Today from './Today.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div className="App-header">
						<Route exact path="/" component={Search} />
						<Route path="/today" component={Today} />
						
						<Link to="/" className="App-link">Szukaj pogody</Link>
						<Link to="/today" className="App-link">Pogoda na dziś</Link>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
