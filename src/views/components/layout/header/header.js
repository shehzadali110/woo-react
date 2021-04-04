import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navs';
import Category from './categories';
import SearchBar from './search';

import Logo from "../../../dist/img/logo.png";
import MiniCart from '../../products/mini-cart';

const Header = (props) => {

    const { navItems, wooCatItems, fixed } = props;

    const [showMenu, setShowMenu] = useState(false);
    const [showCat, setCartMenu] = useState(false);

    return (
        <header className={"site-header-style-1 " + (fixed ? "header-sticky" : "header-normal")} >
            <div className="row small-collapse">
                <div className="small-12 columns">
                    <div className="header-content">

                        {fixed ? null :
                            (<div className="header-line-1">
                                <div className="row align-middle">
                                    <div className="small-12 medium-4 large-3 columns">
                                        <div className="header-branding site-secondary-font">
                                            <div className="site-logo">
                                                <Link to="/" rel="home">
                                                    <img src={Logo} alt="sain's store" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="small-12 medium-8 large-9 columns">
                                        <div className="header-line-1-wrapper">
                                            <div className="header-search">
                                                <SearchBar catDate={wooCatItems} />
                                            </div>
                                            <ul className="header-tools">
                                                <li className="header-account">
                                                    <Link to="/my-account/"> <i className="thehanger-icons-account" /> </Link>
                                                </li>
                                                <li className="header-cart" onMouseOver={() => setCartMenu(true)} onMouseOut={() => setCartMenu(null)} onClick={() => setCartMenu(null)}>
                                                    <MiniCart isHover={showCat} />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }

                        <div className="header-line-2">
                            <div className="row align-middle">
                                <div className="small-12 large-9 large-offset-3 columns">
                                    <div className="header-navigation-wrapper">
                                        <NavBar navDate={navItems} shop={wooCatItems} sticky={fixed} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="header-line-3">
                            <div className={`gbt-mega-dropdown-wrapper ${showMenu ? 'is-active' : null}`}>
                                <div className="row">
                                    <div className="small-12 large-3 columns">
                                        <div className="gbt-mega-dropdown" onMouseLeave={() => setShowMenu(false)} >
                                            {fixed ?
                                                <Link to="/" rel="home" className="fixed logo">
                                                    <img src={Logo} alt="sain's store" />
                                                </Link> : ""
                                            }
                                            <Link to="/" className="gbt-mega-dropdown-button site-secondary-font" onMouseEnter={() => setTimeout(() => setShowMenu(true), 100)}>
                                                <i className="thehanger-icons-hamburger" />
                                                {fixed ? "" : "Browse Categories"}
                                            </Link>
                                            <div className="gbt-mega-dropdown-content">
                                                <div className="gbt-mega-dropdown-content-inside">
                                                    <Category catDate={wooCatItems} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="small-12 large-9 columns gbt-mega-dropdown-megamenu-offset">
                                        <div className="gbt-mega-dropdown-megamenu-placeholder" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hover_overlay_header"></div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
