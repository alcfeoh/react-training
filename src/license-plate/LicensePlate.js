import React from "react";

export class LicensePlate extends React.Component  {

    render() {
        return (
            <div className="col-md-4">
                <h2>{this.props.plate.title}</h2>
                <img src={this.props.plate.picture} className="img-fluid" />
                <p>{this.props.plate.description}</p>
                <div>
                  <h2 className="float-left">$xx</h2>
                  <button className="btn btn-primary float-right" role="button">
                    {this.props.buttonText}
                  </button>
                </div>
            </div>
        )
    }
}