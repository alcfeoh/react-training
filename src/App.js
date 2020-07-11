import React from 'react';
import './App.css';
import {Navigation} from "./navigation/Navigation";
import {BrowserRouter as Router,  Switch, Route} from "react-router-dom";
import {StoreView} from "./store-view/StoreView";
import {CartView} from "./cart-view/CartView";
import {CheckoutView} from "./checkout-view/CheckoutView";


export class App extends React.Component {

    state = {
        currency: '$'
    };

    render() {
        return (
            <Router>
                <Navigation onCurrencyChange={(newVal) => this.setState({currency: newVal})}/>

                <main role="main">
                    <Switch>
                        <Route path="/cart">
                            <CartView currency={this.state.currency} />
                        </Route>
                        <Route path="/checkout">
                            <CheckoutView  />
                        </Route>
                         <Route path="/">
                            <StoreView currency={this.state.currency} />
                        </Route>
                    </Switch>
                </main>

                <footer className="container">
                    <p>&copy; License Plate Store 2020</p>
                </footer>
            </Router>
        );
    }
}

export default App;
