import React, { Component } from 'react'

export default class loader extends Component {
    render() {
        return (
            <div className="mainLoader">
                <div className="wrap">
                    <div className="bounceball"></div>
                    <div className="text">Loading</div>
                </div>
            </div>
        )
    }
}
