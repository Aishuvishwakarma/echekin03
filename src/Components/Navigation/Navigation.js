import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navigation.css'
function Navigation() {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark" >
  <div className="container-fluid d-flex justify-content-between">
    <NavLink className="navbar-brand" to="/home"><h2>eChekin</h2></NavLink>
    <div className="d-flex justify-content-between">
      <ul  className="navbar-nav  d-flex justify-content-center">
      <li className="nav-item">
          <NavLink exact  activeStyle={{color: '#E0B948',fontWeight:'600',textDecoration:'underline',transition:'.5s'}}  className="nav-link active" aria-current="page" to="/echekin03">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact  activeStyle={{color: '#E0B948',fontWeight:'600',textDecoration:'underline',transition:'.5s'}}  className="nav-link active" aria-current="page" to="/pricing">Pricing</NavLink>
        </li>
        <li class="nav-item">
          <NavLink exact  activeStyle={{color: '#E0B948',fontWeight:'600',textDecoration:'underline',transition:'.5s'}}  className="nav-link active" to="/product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact  activeStyle={{color: '#E0B948',fontWeight:'600',textDecoration:'underline',transition:'.5s'}}  className="nav-link active" to="/blog">Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact  activeStyle={{color: '#E0B948',fontWeight:'600',textDecoration:'underline',transition:'.5s'}}  className="nav-link active" to="/contact">Contact</NavLink>
        </li>
      </ul>

    </div>
    <button className="loginbtn">Login</button>
    <button className="navbar-toggler" type="button" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
 
</nav>
  );
}

export default Navigation
