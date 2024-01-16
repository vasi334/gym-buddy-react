import React from 'react';
import logo from "./utils/logo.png"
import "./styles/home.css";

function App() {
  return (
    <div className="container">
      <nav>
        <img src={logo} className="logo-GymBuddy" id="logo" alt="Logo" />
        <ul>
          <li><a id="home" onClick={() => goToPage('Home')}><span className="menu">Acasă</span></a></li>
          <li><a id="account" onClick={() => goToPage('MyAccount')}><span className="menu">Contul meu</span></a></li>
          <li><a id="workouts" onClick={() => goToPage('Workouts')}><span className="menu1">Antrenamente</span></a></li>
          <li><a id="gyms" onClick={() => goToPage('Gyms')}><span className="menu">Săli de fitness</span></a></li>
          <li><a id="trainers" onClick={() => goToPage('Trainers')}><span className="menu">Antrenori</span></a></li>
          <li><a id="nutritionists" onClick={() => goToPage('Nutritionists')}><span className="menu">Nutriționiști</span></a></li>
        </ul>
      </nav>
      <div className="header-content">
        <h1 className="transform-text">Transformă-ți corpul!</h1>
        <button className="join-button" onClick={() => goToPage('Signup')} id="signup-button">Alătură-te!</button>
      </div>
      <div className="account-box">
        <h1 className="account-text">Ai deja un cont?</h1>
        <button className="login-button" onClick={() => goToPage('Login')} id="login-button">Loghează-te</button>
      </div>
    </div>
  )
}

export default App;
