import {Jumbotron} from "../jumbotron/Jumbotron";
import {LicensePlate} from "../license-plate/LicensePlate";
import React from "react";

export class StoreView extends React.Component {

    state = {
        plates: []
    };

    componentDidMount() {
        fetch('https://lp-store.herokuapp.com/data')
            .then(data => data.json())
            .then(plates => this.setState({plates}));
    }

    addToCart = (plateId) => {
        fetch('https://lp-store.herokuapp.com/cart/' + plateId, {method: 'PUT'})
            .then(data => data.json())
            .then(res => alert("Plate added to cart"));
    }

    render() {
        return (
            <>
                <Jumbotron title="Welcome to our store" description="Browse our collection of license plates"/>

                <div className="container">
                    <div className="row">
                        {this.state.plates.map(plate => <LicensePlate plate={plate}
                                                                      key={plate._id}
                                                                      buttonText="Add to cart"
                                                                      currency={this.props.currency}
                                                                      handleButtonClick={() => this.addToCart(plate._id)}/>)
                        }
                    </div>
                </div>
            </>
    );

    }
}