import React from "react";
import "./App.css";
import NavBar from './Navbar';
import Footer from './Footer';

function App() {
  return (
   
    <div class="container">
      <div className="App">
        <header className="App-header">
          <NavBar/>          
        </header>
      </div>
     
      <div className="App">
        <Footer/>
      </div>
    </div>

  
  );
}

export default App;
