import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation'
import Landing from './Components/Landing/Landing'
import Client from './Components/Client/Client'
import Community from './Components/Community/Community'
import Detail from './Components/Detail/Detail'
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/ContactUs/ContactUs'
import Pricing from './Components/Pricing/Pricing'
import Blog from './Components/Blog/Blog'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navigation/>
       <Switch>
<Route exact path="/echekin03" render={()=>{
  return <>
        <Landing/>
        <Client/>
        <Community/>
        <Detail/>
  </>
}} />

<Route exact path="/Contact" render={()=>{
      return <ContactUs/>
    }} /> 
      <Route exact path="/Pricing" render={()=>{
      return <Pricing/>
    }} /> 
      <Route exact path="/Blog" render={()=>{
      return <Blog/>
    }} /> 
  </Switch>
  <Footer/>
  </BrowserRouter> 
    )
  }
}

export default App;