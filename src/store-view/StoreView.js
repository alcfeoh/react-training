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

    render() {
        return (
            <>
                <Jumbotron title="Welcome to our store" description="Browse our collection of license plates"/>

                <div className="container">
                    <div className="row">
                        {this.state.plates.map(plate => <LicensePlate plate={plate} buttonText="Add to cart"
                                                                      currency={this.props.currency}/>)}
                    </div>
                </div>
            </>
    );

    }
}