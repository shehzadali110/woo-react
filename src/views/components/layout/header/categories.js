import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';

const Categories = (props) => {

    const { catDate } = props;
    const [showItem, setItemShow] = useState(null);

    return (
        <div className="is-drilldown animate-height">
            {catDate.length ? (
                <ul className="has-icons vertical menu drilldown mega-dropdown-categories">
                    {catDate.map((items, index) => {
                        return items.child.length === 0 ? (
                            <li key={index}>
                                <Link to={`/${items.slug}`} className="site-secondary-font" title={items.name}>
                                    <i className={items.icon}></i>
                                    {renderHTML(items.name)}
                                    <span className="count">{items.count}</span>
                                </Link>
                            </li>
                        )
                            : items.child.length ? (
                                <li key={index} className="menu-item-has-children is-drilldown-submenu-parent">
                                    <Link to={{ hash: "#the-hash" }} title={items.name} onClick={() => setItemShow(true)}>
                                        <i className={items.icon}></i>
                                        {renderHTML(items.name)}
                                        <span className="count">{items.count}</span>
                                    </Link>
                                    <ul className={`menu vertical nested site-main-font submenu is-drilldown-submenu ${showItem ? "is-active" : "invisible"}`}>
                                        <li className="js-drilldown-back" onClick={() => setItemShow(false)}>
                                            <Link to={{ hash: "#the-hash" }}>Back</Link>
                                        </li>
                                        {items.child.map((sub, index) => (
                                            <li key={index} className="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item">
                                                <Link to={`/${sub.slug}`} title={sub.name}>
                                                    <i className={sub.icon}></i>
                                                    {renderHTML(sub.name)}
                                                    <span className="count">{sub.count}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            )
                                : null;
                    })}
                </ul>
            ) : null}
        </div>
    );

}

export default Categories;