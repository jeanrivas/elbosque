import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import RegisterPage from './pages/registro';
import OurselvesPage from './pages/nosotros';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/register">
					<RegisterPage />
				</Route>
				<Route exact path="/ourselves">
					<OurselvesPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
