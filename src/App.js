import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation'
import Landing from './Components/Landing/Landing'
import Client from './Components/Client/Client'
import Community from './Components/Community/Community'
// import Footer from './Components/Footer/Footer'

import {BrowserRouter,Switch,Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Navigation/>
        <Landing/>
        <Client/>
        <Community/>
      </BrowserRouter>
    )
  }
}

export default App;