import React from "react";

export class CurrencySwitcher extends React.Component {

    constructor() {
        super();
        debugger;
        this.state = {
            currency: 'USD',
            showItems: false
        }
    }

    render() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-info dropdown-toggle" dataToggle="dropdown"
                        onClick={() => this.setState((state) => ({showItems: !state.showItems}))}>
                    {this.state.currency}
                </button>
                <div className={"dropdown-menu " + (this.state.showItems && 'show')}>
                    <a className="dropdown-item">USD ($)</a>
                    <a className="dropdown-item">EUR (€)</a>
                    <a className="dropdown-item">GBP (£)</a>
                </div>
            </div>
        );
    }
}