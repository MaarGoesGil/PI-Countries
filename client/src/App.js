import React, {useEffect, useState} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
// luego componentes a usar
import Home from './components/Home/Home';
import Countries from './components/Countries/Countries';
import Activity from './components/Activity/Activity'
// Store --> import { connect } from 'react-redux';


function App() {
  // ----- funciones extras -----
  // --------------------------------
  return (
    <div className="App">
      <Route exact path='/' render={() => <Home />} />

      <Route path='/countries' render={() => <Countries />} />

      <Route path='/activity' render={() => <Activity />} />
    </div>
  );

}

export default App;
