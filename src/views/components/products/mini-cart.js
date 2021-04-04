import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WpReact } from '../../../context';

export default class MiniCart extends Component {

    render() {
        return (
            <WpReact>
                {value => {
                    const { cartItems, removeItem, cartupdate } = value;
                    return (
                        <React.Fragment>
                            {cartItems.length > 0 && cartItems !== undefined ?
                                <React.Fragment>
                                    <Link to="/cart/">
                                        <i className="thehanger-icons-shopping-bag" />
                                        <div className="tools_badge shopping_bag_items_number animate">{cartItems.length}</div>
                                    </Link>
                                    <div className="header-minicart-placeholder">
                                        <div className={`dropdown-pane minicart ${this.props.isHover ? "animated is-open" : ""}`} style={{ top: '70px', left: '900px' }}>
                                            <div className="widget woocommerce widget_shopping_cart">
                                                <h2 className="widgettitle">Cart</h2>

                                                <div className="widget_shopping_cart_content">

                                                    <ul className="woocommerce-mini-cart cart_list product_list_widget ">
                                                        {cartItems.map((item, index) => (
                                                            <li key={index} className="woocommerce-mini-cart-item mini_cart_item">
                                                                <Link to="/" className="remove remove_from_cart_button" onClick={() => { removeItem(item.id) }}>×</Link>
                                                                <Link to="/cart/">
                                                                    <img width="330" height="413" src={item.images[0].src} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt={item.images[0].slug} loading="lazy" />
                                                                    {item.name}
                                                                </Link>
                                                                <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">₨</span> {item.sale_price}</bdi></span>
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <p className="woocommerce-mini-cart__total total">
                                                        <strong>Subtotal: </strong>
                                                        <span className="woocommerce-Price-amount amount">
                                                            <bdi><span className="woocommerce-Price-currencySymbol">₨</span> {cartupdate}</bdi>
                                                        </span>
                                                    </p>
                                                    <p className="woocommerce-mini-cart__buttons buttons">
                                                        <Link to="/cart/" className="button wc-forward">View cart</Link>
                                                        <Link to="/checkout/" className="button checkout wc-forward">Checkout</Link>
                                                    </p>

                                                </div>

                                            </div>
                                            <div className="minicart_infos">Free shipping on all orders over $75</div>
                                        </div>
                                    </div>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <Link to="/cart/">
                                        <i className="thehanger-icons-shopping-bag" />
                                        <div className="tools_badge shopping_bag_items_number animate">0</div>
                                    </Link>
                                    <div className="header-minicart-placeholder">
                                        <div className={`dropdown-pane minicart ${this.props.isHover ? "animated is-open" : ""}`} style={{ top: '70px', left: '900px' }}>
                                            <div className="widget woocommerce widget_shopping_cart">
                                                <h2 className="widgettitle">Cart</h2>
                                                <div className="widget_shopping_cart_content">
                                                    <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>
                                                </div>
                                            </div>
                                            <div className="minicart_infos">Free shipping on all orders over $75</div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            }
                        </React.Fragment>
                    )
                }}
            </WpReact>
        )
    }
}
