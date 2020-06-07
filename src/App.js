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
import Background from "./img/background/P50520-202802-min.jpg";

const HomePage = lazy(() => import("./components/Home"));

function App() {

  const [loading, toggleLoading] = useState(true);

  let image = {};

  const imageLoad = async () => {
    const response = await fetch(`./img/background/P50520-202802-min.jpg`);
    image = await response.body;
    //console.log(image);
    //setTimeout(() => toggleLoading(false), 1000)
    toggleLoading(false);
  }

  useEffect(() => {
    imageLoad();

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
            <Route path="/" component={Home} />
          </Switch>
        </HashRouter>
      </div>

  );

}

export default App;
