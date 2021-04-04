import React, { Component } from 'react';
import Single from './detail'
import { WpReact } from '../../../context';

export default class ProductDetail extends Component {
    render() {
        return (
            <WpReact>
                {value => {
                    return (
                        <Single wooSingPro={value.detailProduct} />
                    )
                }}
            </WpReact>
        )
    }
}
