import React from "react";
import './App.css'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from "./components/About";
import Contact from "./components/Contact";
import Post from './components/Post'

function App(){
  return(
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/posts/:id' component={Post} />
        </Switch>
      </Router>
    </div>
  )
}

export default App