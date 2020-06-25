import React from 'react';
import './App.css';
import {Jumbotron} from "./jumbotron/Jumbotron";
import {Navigation} from "./navigation/Navigation";
import {LicensePlate} from "./license-plate/LicensePlate";

export class App extends React.Component {

    state = {
        plates: [],
        currency: '$'
    };

    componentDidMount() {
        fetch('https://lp-store.herokuapp.com/data')
            .then(data => data.json())
            .then(plates => this.setState({plates}));
    }

    render() {
        return (
            <>
                <Navigation onCurrencyChange={(newVal) => this.setState({currency: newVal})}/>

                <main role="main">
                    <Jumbotron title="Welcome to our store" description="Browse our collection of license plates"/>

                    <div className="container">
                        <div className="row">
                            {this.state.plates.map(plate => <LicensePlate plate={plate} buttonText="Add to cart" currency={this.state.currency}/>)}
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
