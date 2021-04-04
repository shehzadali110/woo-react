import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BreadCrumb extends Component {
    render() {
        return (
            <nav className="woocommerce-breadcrumb">
                <Link to="/">Home</Link>
                <span className="delimiter">/</span>Shop
            </nav>
        )
    }
}
