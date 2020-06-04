import React from 'react';
import './App.css';
import {Jumbotron} from "./jumbotron/Jumbotron";
import {Navigation} from "./navigation/Navigation";
import {LicensePlate} from "./license-plate/LicensePlate";
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "./mock-data";

export class App extends React.Component {

    constructor() {
        super();
        this.state = {
            plates: LICENSE_PLATES
        };
    }

    render() {
        return (
            <>
                <Navigation/>

                <main role="main">
                    <Jumbotron title="Welcome to our store" description="Browse our collection of license plates"/>

                    <div className="container">
                        <div className="row">
                            {this.state.plates.map(plate => <LicensePlate plate={plate} buttonText="Add to cart"/>)}
                        </div>
                    </div>
                </main>

                <footer className="container">
                    <p>&copy; License Plate Store 2020</p>
                </footer>
            </>
        );
    }
}

export default App;
