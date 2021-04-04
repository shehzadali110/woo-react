import React from 'react';
import { Link } from 'react-router-dom';
import JazzCash from "../../../dist/img/jazz-pay-icon.png";
import EasyPaisa from "../../../dist/img/easy-pay-icon.png";
import MasterCard from "../../../dist/img/credit-card-pay-icon.png";

const BottomFooter = (props) => {

    const { bottomFooter } = props;

    return (
        <React.Fragment>
            <div className="large-6 small-12 columns">
                <div className="footer-navigation">
                    <nav className="navigation-foundation">
                        {bottomFooter.items.length ? (
                            <ul id="menu-footer-menu" className="dropdown menu">
                                {bottomFooter.items.map((items, index) => (
                                    <li key={index} className={`menu-item menu-item-type-${items.type} menu-item-object-${items.object} menu-item-${items.id}`} role="menuitem">
                                        <Link to={`/${items.object_slug}`}><span>{items.title}</span></Link>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </nav>
                </div>
                <div className="footer-text">
                    © {process.env.REACT_APP_NAME} - Powered by
                    <a href="http://shehzadali.move.pk/"> shehzadali110</a>.
                </div>
            </div>
            <div className="large-6 small-12 columns">
                <div className="footer-credit-card-icons">
                    <img src={JazzCash} alt="Jazz Cash" title="Jazz Cash" />
                    <img src={EasyPaisa} alt="Easy Paisa" title="Easy Paisa" />
                    <img src={MasterCard} alt="Credit Card" title="Credit Card" />
                </div>
            </div>
        </React.Fragment>

    )
}

export default BottomFooter
