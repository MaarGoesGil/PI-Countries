import React from 'react';
import './App.css';
import { Route, NotFoundRoute } from 'react-router-dom';
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

      <Route exact path='/' render={() => <Index />} />

      <Route exact path='/countries' render={() => <Home />} />
      
      <Route exact path='/activity' render={() => <Activity />} />

      <Route exact path='/countries/:idPais' render={() => <Detalle />} />

      
       {/* <Route exact path='*' render={() => <Errors />} /> */}
    </div>
  );

}

export default App;
