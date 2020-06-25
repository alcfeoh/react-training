import React from "react";

export class CurrencySwitcher extends React.Component {

    currencyMapper = {
        '$': 'USD', '€': 'EUR', '£': 'GBP'
    };

    state = {
        currency: '$',
        showItems: false
    };

    changeCurrency = (newValue) => {
        this.setState({currency: newValue, showItems: false});
        if (this.props.onChange)
            this.props.onChange(newValue);
    }

    render() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-info dropdown-toggle" dataToggle="dropdown"
                        onClick={() => this.setState((state) => ({showItems: !state.showItems}))}>
                    {this.currencyMapper[this.state.currency]}
                </button>
                <div className={"dropdown-menu " + (this.state.showItems && 'show')}>
                    <a className="dropdown-item" onClick={() => this.changeCurrency('$')}>USD ($)</a>
                    <a className="dropdown-item" onClick={() => this.changeCurrency('€')}>EUR (€)</a>
                    <a className="dropdown-item" onClick={() => this.changeCurrency('£')}>GBP (£)</a>
                </div>
            </div>
        );
    }
}