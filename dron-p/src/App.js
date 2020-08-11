import React from 'react';
import './css/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Sensores from './components/CardPage';
import Graficas from './components/Graphics';
import Menu from './components/MenuBar'

function App() {
  return (
    
    <Router> 
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/sensores" component={Sensores}/>
          <Route path="/graficas" component={Graficas}/>
        </Switch>
      </div>
   </Router>
  );
}

const HomePage = () => (
    <div>
      Home
    </div>
);

export default App;
