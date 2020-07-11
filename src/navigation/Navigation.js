import React from "react";
import {CurrencySwitcher} from "../currency-switcher/CurrencySwitcher";
import {Link} from "react-router-dom";

export class Navigation extends React.Component  {

    render() {
        const {onCurrencyChange} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">License Plate Store</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className='nav-link'>Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className='nav-link'>Cart </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/checkout" className='nav-link'>Checkout </Link>
                        </li>
                    </ul>
                    <CurrencySwitcher onChange={onCurrencyChange}/>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}