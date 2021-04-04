import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopBar = (props) => {

    const { tagDate } = props;

    const [showClass, setShowClass] = useState(null);

    return (
        <React.Fragment>
            <div className="topbar">
                <div className="row small-collapse">
                    <div className="small-12 columns">
                        <div className="topbar-content">
                            <div className="topbar-wrapper-left">
                                <div className="topbar-socials">
                                    <ul className="shortcode_socials left" />
                                </div>
                                <div className="topbar-info-1">Call +(92) 315 2688148</div>
                            </div>
                            <div className="topbar-info-2">Free shipping on all orders over $75</div>
                            <div className="topbar-navigation">
                                <nav className="navigation-foundation">
                                    {tagDate.items.length ? (
                                        <ul id="menu-top-bar-menu-1" className="dropdown menu">
                                            {tagDate.items.map((items, index) => (
                                                <li key={index} className={`menu-item ${items.children.length > 0 ? 'menu-item-has-children' : ''} menu-item-type-${items.object} menu-item-object-type-${items.object} menu-item-${items.id} opens-right ${showClass === items.id ? "is-active" : ''}`} onMouseOver={() => setShowClass(items.id)} onMouseOut={() => setShowClass(null)}>
                                                    <Link to={`/${items.object_slug}`}><span>{items.title}</span></Link>
                                                    {items.children.length ? (
                                                        <ul className={"vertical menu site-main-font submenu is-dropdown-submenu first-sub" + (showClass === items.id ? " js-dropdown-active" : '')}>
                                                            {items.children.map((subItems, index) => (
                                                                <li key={index} className={`menu-item menu-item-type-${subItems.object} menu-item-object-type-${subItems.object} menu-item-${subItems.id} is-submenu-item is-dropdown-submenu-item`} onClick={() => setShowClass(null)}>
                                                                    <Link to={`/${subItems.object_slug}`}><span>{subItems.title}</span></Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : null}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TopBar;