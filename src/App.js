import React from 'react';
import "./App.css";
import Home from  './pages/Home';
import Cars from './pages/Cars';
import Errors from './pages/Errors';
import SingleCar from './pages/SingleCar';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";
import Footer from './component/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cars/" component={Cars} />
        <Route exact path="/cars/:company" component={SingleCar} />
        <Route component={Errors} />
        
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
