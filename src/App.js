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

  let image = {};

  const imageLoad = async () => {
    const response = await fetch("/static/media/P50520-202802-min.2f6fc14a.jpg");
    image = await response.url;
    //console.log(image);
    //const res = await setTimeout(() => toggleLoading(false), 1500)
    await toggleLoading(false);
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
