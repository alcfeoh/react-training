import React from "react";

export function LicensePlate(props) {

    const {plate, buttonText} = props;

    const handleButtonClick = () => {
        alert("Plate added to cart");
    }

    return (
        <div className="col-md-4">
            <h2>{plate.title} {plate.onSale && <img src="sale.png" />}</h2>
            <img src={plate.picture} className="img-fluid" />
            <p>{plate.description}</p>
            <div>
              <h2 className="float-left">${plate.price}</h2>
              <button className="btn btn-primary float-right" role="button" onClick={handleButtonClick}>
                {buttonText}
              </button>
            </div>
        </div>
    );
}