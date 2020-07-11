import React from "react";
import {Jumbotron} from "../jumbotron/Jumbotron";
import {LicensePlate} from "../license-plate/LicensePlate";

export class CartView extends React.Component {

    state = {
        cartContents: []
    };

    componentDidMount() {
        this.updateCartContents();
    }

    updateCartContents = () => {
        fetch('https://lp-store.herokuapp.com/cart')
            .then(data => data.json())
            .then(plates => this.setState({cartContents: plates}));
    }

    removeFromCart = (plateId) => {
        fetch('https://lp-store.herokuapp.com/cart/' + plateId, {method: 'DELETE'})
            .then(data => data.json())
            .then(res => this.updateCartContents());
    }

    render() {
        return (
            <>
                <Jumbotron title="Your Cart" description="Here you can remove items from your cart"/>

                <div className="container">
                    <div className="row">
                        {this.state.cartContents.map(plate => <LicensePlate plate={plate}
                                                                            buttonText="Remove from cart"
                                                                            key={plate._id}
                                                                            currency={this.props.currency}
                                                                            handleButtonClick={() => this.removeFromCart(plate._id)}/>)
                        }
                    </div>
                </div>
            </>
        );

    }
}