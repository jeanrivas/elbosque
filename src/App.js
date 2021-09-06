import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import registroPagina from './pages/registro';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/registro" component={registroPagina} exact />
      </Switch>
    </Router>
  );
};

export default App;
