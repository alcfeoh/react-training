import React from "react";
import {Jumbotron} from "../jumbotron/Jumbotron";
import {LicensePlate} from "../license-plate/LicensePlate";

export class CartView extends React.Component {

    state = {
        cartContents: []
    };

    componentDidMount() {
        fetch('https://lp-store.herokuapp.com/cart')
            .then(data => data.json())
            .then(plates => this.setState({cartContents: plates}));
    }

    render() {
        return (
            <>
                <Jumbotron title="Your Cart" description="Here you can remove items from your cart"/>

                <div className="container">
                    <div className="row">
                        {this.state.cartContents.map(plate => <LicensePlate plate={plate} buttonText="Remove from cart"
                                                                      currency={this.props.currency}/>)}
                    </div>
                </div>
            </>
        );

    }
}