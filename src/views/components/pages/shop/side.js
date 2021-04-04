import React, { Component } from 'react';
import { WpReact } from '../../../../context';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';

export default class ShopSide extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onHover: false,
            hoverID: undefined
        };
    }

    onClicked = (elementID) => {
        this.setState({
            onHover: !this.state.onHover,
            hoverID: elementID
        });
    };

    render() {

        const { onHover, hoverID } = this.state;

        return (
            <aside className="widget woocommerce widget_product_categories_with_icon">
                <ul className="product-categories-with-icon">
                    <WpReact>
                        {value => {
                            return (
                                <React.Fragment>
                                    {value.wooCat.map((items, index) => {
                                        return items.child.length === 0 ? (
                                            <li key={index} className={`cat-item cat-item-${items.id}`}>
                                                <Link to={{ hash: items.slug }} className="site-secondary-font">
                                                    <i className={items.icon}></i>
                                                    {renderHTML(items.name)}
                                                </Link>
                                                <span className="count">{items.count}</span>
                                            </li>
                                        )
                                            : items.child.length ? (
                                                <li key={index} className={`cat-parent cat-item cat-item-${items.id}`}>
                                                    <Link to={{ hash: items.slug }} className="site-secondary-font">
                                                        <i className={items.icon}></i>
                                                        {renderHTML(items.name)}
                                                        <span className="count">{items.count}</span>
                                                    </Link>
                                                    <span className="dropdown_icon thehanger-icons-arrow-down-dark" onClick={() => { this.onClicked(items.id); this.props.value(items.slug, value.wooPro); }} />
                                                    <ul className="children" style={{ display: onHover && hoverID === items.id ? 'block' : 'none' }}>
                                                        {items.child.map((sub, index) => (
                                                            <li key={index} className={`cat-item cat-item-${sub.id}`} onClick={() => this.props.value(items.slug)}>
                                                                <Link to={{ hash: `${items.slug}&${sub.slug}` }}>
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
                                </React.Fragment>
                            )
                        }}
                    </WpReact>
                </ul>
            </aside>
        )
    }
}
