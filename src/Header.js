import React from 'react';
// import ReactDOM from 'react-dom';

import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#career">Career</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
          <li className="nav-item"><a href="#login">Log in</a></li>
          <li className="nav-item"><a href="#signup">Sign up</a></li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      {/*      
      <h1>Hello</h1> 
      <p>vcvdfv  </p> */}
    </div>
  );
}



export default App;
