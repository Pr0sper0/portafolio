import React, { useState, useEffect, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './styles/main.css';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import { DualRing } from 'react-awesome-spinners';


function App() {

  const [loading, toggleLoading] = useState(true);

  let imageUrl = {};

  /*   const imageLoad = async () => {
      const response = await fetch("./img/background/P50520-202802-min.jpg");
      imageUrl = await response.url;
      console.log(response);
      const res = setTimeout(() => toggleLoading(false), 500)
      toggleLoading(false);
    } */

  useEffect(() => {
    const res = setTimeout(() => toggleLoading(false), 500)

  }, [])

  return (

    loading ? <div id="loading-ring"><DualRing /></div> :
      <div className="App" >
        <HashRouter>
          <Navigation />
          <Switch>

            <Route exact path="/home" component={Home} />

            <Route exact path="/about" component={About} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/" render={(props) => <Home {...props} url={imageUrl} />} />
          </Switch>
        </HashRouter>
      </div>

  );

}

export default App;
