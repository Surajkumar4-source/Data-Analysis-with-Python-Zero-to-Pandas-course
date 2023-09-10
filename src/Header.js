import React from 'react';
import ReactDOM from 'react-dom';

import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">About</a></li>
          <li className="nav-item"><a href="#">Career</a></li>
          <li className="nav-item"><a href="#">Contact</a></li>
          <li className="nav-item"><a href="#">Log in</a></li>
          <li className="nav-item"><a href="#">Sign up</a></li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      {/* <br/>   <br/>    <br/>      
      <h1>Hello</h1> 
      <p>vcvdfv  </p> */}
    </div>
  );
}



export default App;
