import React from 'react';
import './App.css';
import {Jumbotron} from "./jumbotron/Jumbotron";
import {Navigation} from "./navigation/Navigation";
import {LicensePlate} from "./license-plate/LicensePlate";
import {CALIFORNIA_PLATE} from "./mock-data";

function App() {
  return (
      <>
          <Navigation/>

          <main role="main">
              <Jumbotron title="Welcome to our store" description="Browse our collection of license plates"/>

              <div className="container">
                  <div className="row" >
                    <LicensePlate plate={CALIFORNIA_PLATE} buttonText="Add to cart" />
                  </div>
              </div>
          </main>

          <footer className="container">
              <p>&copy; License Plate Store 2020</p>
          </footer>
      </>
  );
}

export default App;
