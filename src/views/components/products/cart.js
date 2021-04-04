import React, { useEffect } from 'react';
import { WpReact } from '../../../context';
import CartItems from './cart-items';
import EmptyCart from './empty-cart';

const Cart = () => {

    useEffect(() => {
        document.body.classList.add('woocommerce', 'woocommerce-cart', 'woocommerce-page', 'woocommerce-js');
    });

    return (
        <div className="site-content-wrapper site-content">
            <div className="row small-collapse">
                <div className="small-12 columns">
                    <div className="site-content">

                        <WpReact>
                            {value => {
                                const { cartItems, updateCart, removeItem, cartupdate } = value;
                                return (
                                    <React.Fragment>
                                        {cartItems.length > 0 && cartItems !== undefined ?
                                            <CartItems cartItem={cartItems} updateItem={updateCart} removeItem={removeItem} cartTotal={cartupdate} />
                                            : <EmptyCart />
                                        }
                                    </React.Fragment>
                                )
                            }}
                        </WpReact>

                    </div>
                </div>
            </div>
            <div className="hover_overlay_content" />
        </div>
    )
}

export default Cart