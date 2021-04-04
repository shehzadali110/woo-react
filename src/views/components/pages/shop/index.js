import React, { Component } from 'react';
import { WpReact } from '../../../../context';
import BreadCrumb from './breadcrumb';
import ShopSide from './side';
import ProductItems from '../../products/items';

export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyItem: 'Accessories',
            wooItem: null
        };
    }

    componentDidMount() {
        document.body.classList.remove('woocommerce-cart');
        document.body.classList.add('woocommerce', 'woocommerce-page', 'woocommerce-js', 'woocommerce-shop', 'shop-sidebar-active', 'shop-sidebar-left');
    }

    tabClick = (key, items) => {
        this.setState({ keyItem: key, wooItem: items });
        // document.querySelector(".remove-items").remove();
    }

    getItemList = (list, key) => {
        if (null !== list && null !== key) {
            let getItems = [];
            for (var i = 0; i < list.length; i++) {
                for (var j = 0; j < list.length; j++) {
                    if (list[i].categories[j] !== undefined) {
                        if (list[i].categories[j].slug === key) {
                            getItems.push(list[i]);
                        }
                    }
                }
            }
            return getItems;
        }
    };

    render() {

        const itemLists = this.getItemList(this.state.wooItem, this.state.keyItem);

        return (
            <div className="site-content-wrapper site-content">
                <div className="row small-collapse">
                    <div className="small-12 columns">
                        <div className="site-content woocommerce-sidebar-active">
                            <BreadCrumb />
                            <div className="row">
                                <div className="small-12 large-3 columns show-for-large">
                                    <div className="woocommerce-sidebar-sticky">
                                        <aside className="site-sidebar site-sidebar--shop widget-area">
                                            <ShopSide value={this.tabClick} />
                                        </aside>
                                    </div>
                                </div>
                                <div className="small-12 large-9 columns">
                                    <div className="site-main-content-wrapper">
                                        <div className="shop_header_placeholder">
                                            <header className="woocommerce-archive-header">
                                                <div className="woocommerce-archive-header-inside">
                                                    <h1 className="woocommerce-products-header__title woocommerce-archive-header-title page-title">
                                                        {this.state.keyItem}&nbsp;
                                                        <span className="category-title-count">
                                                            {itemLists ? itemLists.length : 0} items
                                                        </span>
                                                    </h1>
                                                </div>
                                            </header>
                                        </div>
                                        <div className="row">
                                            <div className="large-12 columns">
                                                <div className="site-main-content" id="sticky_bottom_anchor">
                                                    <div className="woocommerce-notices-wrapper" />

                                                    {itemLists ? (
                                                        <ul className="products columns-3 js_animated">
                                                            {itemLists.map((items, index, row) => (
                                                                <ProductItems items={items} check={index} key={index + 1} row={row} height={'270px'} />
                                                            ))}
                                                        </ul>
                                                    )
                                                        : (<WpReact>
                                                            {value => {
                                                                return (
                                                                    <ul className="products columns-3 js_animated">
                                                                        {value.wooPro.map((items, index, row) => (
                                                                            <ProductItems items={items} check={index} key={index + 1} row={row} height={'270px'} />
                                                                        ))}
                                                                    </ul>
                                                                )
                                                            }}
                                                        </WpReact>)
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hover_overlay_content" />
            </div>
        )
    }
}
