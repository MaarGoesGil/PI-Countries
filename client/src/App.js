import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components/Index/Index';
import Home from './components/Home/Home';
import Activity from './components/Activity/Activity'
import Detalle from './components/Detalle/Detalle';
import Errors from './components/Errors/Errors';


function App() {
  // ----- funciones extras -----
  // --------------------------------
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/' render={() => <Index />} />

          <Route exact path='/countries' render={() => <Home />} />
          
          <Route exact path='/activity' render={() => <Activity />} />

          <Route exact path='/countries/:idPais' render={() => <Detalle />} />
      
          <Route path='*' render={() => <Errors />}/>

        </Switch>
      </Router>

    </div>
  );

}

export default App;
