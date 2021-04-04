import React from "react";
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import mapIcon from "../../../dist/img/map.jpg";
import NotAvailable from "../../../dist/img/not.jpg";

const MegaMenu = (props) => {

    const { shopMenu, isHover, isHoverId } = props;

    return (
        <React.Fragment>

            <div className={'gbt-mega-menu-content dropdown-pane' + (isHover && isHoverId === 76 ? ' animated is-open' : '')}
                style={{ maxHeight: '460px', overflow: 'hidden auto' }}>
                <div className="megamenu_category_wrapper">
                    <div className="row">
                        <div className="large-12 columns">
                            {shopMenu.length ? (
                                <div className="megamenu_category_list row small-up-1 medium-up-3 large-up-4">
                                    {shopMenu.map((items, index) => (
                                        <div key={index} className="megamenu_category column">
                                            <Link to={`/${items.slug}`}>
                                                <span style={{ backgroundImage: `url(${items.image !== null ? items.image.src : NotAvailable})` }}
                                                    className="megamenu_thumbnail rocket-lazyload" />
                                                {renderHTML(items.name)}
                                                <span className="count"> ({items.count}) </span>
                                            </Link>
                                            <br />
                                            <div className="megamenu_subcategory_list">
                                                {items.child.map((sub, index) => (
                                                    <div key={index}>
                                                        <Link to={`/${sub.slug}`}>
                                                            {renderHTML(sub.name)}
                                                            <span className="count"> ({sub.count}) </span>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="megamenu_bottom_links">
                    <Link to="/shop/?new-products=1">New Products</Link>
                    <Link to="/shop/?on-sale=1">On Sale!</Link>
                </div>
                <div className="megamenu_cta"><p>50% SALE ON ALL WINTER ITEMS</p></div>
            </div>

            <div className={'gbt-mega-menu-content dropdown-pane' + (isHover && isHoverId === 79 ? ' animated is-open' : '')} >
                {shopMenu.length ? (
                    <div className="megamenu_icon_list">
                        {shopMenu.map((items, index) => (
                            <Link key={index} to={`/${items.slug}`}>
                                <i className={items.icon}></i>
                                <span>{renderHTML(items.name)}</span>
                            </Link>
                        ))}
                    </div>
                ) : null}
            </div>

            <div className={'gbt-mega-menu-content dropdown-pane' + (isHover && isHoverId === 82 ? ' animated is-open' : '')} >
                <div className="megamenu_contact">
                    <div className="row collapse">
                        <div className="small-12 medium-6 large-6 columns"><img src={mapIcon} alt="icon" /></div>
                        <div className="small-12 medium-6 large-6 columns">
                            <div className="megamenu_contact_info">
                                <div className="row">
                                    <div className="small-12 medium-6 large-6 columns">
                                        <p><i className="thehanger-icons-phone_iphone"></i><span>Call Us +40 123 123 123</span></p>
                                        <p><i className="thehanger-icons-calendar_wall-clock-2"></i>
                                            <span>Monday — Friday,<br /> 9:00 AM — 5:00 PM</span>
                                        </p>
                                        <p><i className="thehanger-icons-mail_mail"></i><span>support@yourstore.com</span></p>
                                    </div>
                                    <div className="small-12 medium-12 large-6 columns">
                                        <p>
                                            <i className="thehanger-icons-ecommerce_shop-location2"></i>
                                            <span>17 Princess Road<br />London, Greater London<br />NW1 8JRUK, Europe</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    )
}

export default MegaMenu
