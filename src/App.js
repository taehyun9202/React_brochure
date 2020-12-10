import React from 'react'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Menu from './components/Menu'
import Reservation from './components/Reservation'
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/menu">
            <Menu />
          </Route>

          <Route path="/reservation">
            <Reservation />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
