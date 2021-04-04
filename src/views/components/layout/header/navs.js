import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MegaMenu from "./mega";

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onHover: false,
            hoverID: undefined
        };
    }

    onMouseOver = (elementID) => {
        this.setState({
            onHover: true,
            hoverID: elementID
        });
    };

    onMouseOut = () => {
        this.setState({
            onHover: false,
            hoverID: undefined
        });
    };

    render() {

        const { navDate, shop, sticky } = this.props;
        const { onHover, hoverID } = this.state;

        return (
            <React.Fragment>
                <div className="header-navigation offset" onMouseLeave={() => this.onMouseOut()}>
                    <nav className="navigation-foundation">
                        {navDate.length ? (
                            <ul id="menu-main-navigation" className="gbt-primary-menu dropdown menu site-secondary-font">
                                {navDate[0].items.map((items, index) => (
                                    <li key={index} className={`menu-item menu-item-type-${items.type} menu-item-object-${items.object} menu-item-${items.id} ${items.classes ? 'menu-item-has-mega-menu' : ''}`} onMouseEnter={() => this.onMouseOver(items.id)} onClick={() => this.onMouseOut()}
                                    >
                                        <Link to={`/${items.object_slug}`} className={onHover && hoverID === items.id ? "hover" : ""}><span>{items.title}</span></Link>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </nav>
                    <div className="header-megamenu-placeholder">
                        <MegaMenu shopMenu={shop} isHover={onHover} isHoverId={hoverID} />
                    </div>
                </div>
                <div className="header-secondary-navigation">
                    <nav className="navigation-foundation">

                        {sticky ?

                            <ul className="header-tools">
                                <li className="header-search">
                                    <Link to="/">
                                        <i className="thehanger-icons-search"></i>
                                    </Link>
                                </li>
                                <li className="header-account">
                                    <Link to="/my-account-2">
                                        <i className="thehanger-icons-account"></i>
                                    </Link>
                                </li>
                                <li className="header-cart">
                                    <Link to="/cart-2">
                                        <i className="thehanger-icons-shopping-bag"></i>
                                        <div className="tools_badge shopping_bag_items_number animate">0</div>
                                    </Link>
                                    <div className="header-minicart-placeholder">
                                        <div className="dropdown-pane minicart" id="header-sticky-minicart">
                                            <div className="widget woocommerce widget_shopping_cart">
                                                <h2 className="widgettitle">Cart</h2>
                                                <div className="widget_shopping_cart_content">
                                                    <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>
                                                </div>
                                            </div>
                                            <div className="minicart_infos">Free shipping on all orders over $75</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            :

                            navDate.length ? (
                                <ul id="menu-secondary-navigation" className="dropdown menu">
                                    {navDate[1].items.map((items, index) => (
                                        <li key={index} className={`menu-item menu-item-type-${items.type} menu-item-object-${items.object} menu-item-${items.id}`}>
                                            <Link to={`/${items.object_slug}`}><span>{items.title}</span></Link>
                                        </li>
                                    ))}
                                </ul>
                            )

                                : null
                        }

                    </nav>
                </div>
            </React.Fragment>
        )
    }
}
