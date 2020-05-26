import React from 'react';
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

class App extends React.Component {

  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000)
  }

  render() {
    return (

      this.state.loading ? <div id="loading-ring"><DualRing /></div> :
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
        </div >

    );
  }
}

export default App;
