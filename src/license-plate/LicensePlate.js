import React from "react";

export function LicensePlate(props) {

    const {plate, buttonText, currency = '$', handleButtonClick} = props;

    return (
        <div className="col-md-4">
            <h2>{plate.title} {plate.onSale && <img src="sale.png" alt="On sale"/>}</h2>
            <img src={plate.picture} className="img-fluid" alt="License plate" />
            <p>{plate.description}</p>
            <div>
              <h2 className="float-left">{currency}{plate.price}</h2>
              <button className="btn btn-primary float-right" onClick={handleButtonClick}>
                {buttonText}
              </button>
            </div>
        </div>
    );
}