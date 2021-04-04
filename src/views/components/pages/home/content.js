import React from 'react';
import ProductsItems from '../../products/items';

const Content = (props) => {

    const { wooItems } = props;

    const getItemList = (list, key) => {
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
    };

    const womenLists = getItemList(wooItems, 'women');
    const menLists = getItemList(wooItems, 'men');

    return (
        <div className="entry-content">

            <div className="row small-collapse">
                <div className="small-12 columns">
                    <div className="site-content">
                        <div className="wpb_wrapper">
                            <h3 style={{ textAlign: 'center' }}>Recent Products</h3>
                            <h6 style={{ textAlign: 'center' }}>
                                <span style={{ color: '#777777' }}>Add our new arrivals to your weekly lineup</span>
                            </h6>
                        </div>
                        <div className="woocommerce columns-4">
                            {wooItems.length ? (
                                <ul className="products columns-columns-4 js_animated">
                                    {wooItems.filter(items => items.on_sale === true).slice(0, 4).map((items, index, row) => (
                                        <ProductsItems items={items} check={index} key={index + 1} row={row} height={'270px'} />
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row small-collapse">
                <div className="small-12 columns">
                    <div className="site-content">
                        <div className="wpb_wrapper">
                            <h3 style={{ textAlign: 'center' }}>Women Products</h3>
                            <h6 style={{ textAlign: 'center' }}>
                                <span style={{ color: '#777777' }}>Add our new arrivals to your weekly lineup</span>
                            </h6>
                        </div>
                        <div className="row small-collapse">
                            <div className="small-6 columns">
                                <div className="padding-container">
                                    <div className="woocommerce columns-1">
                                        {wooItems.length ? (
                                            <ul className="products columns-columns-1 js_animated">
                                                {womenLists.slice(0, 1).map((items, index, row) => (
                                                    <ProductsItems items={items} check={index} key={index + 2} row={row} height={'560px'} />
                                                ))}
                                            </ul>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                            <div className="small-6 columns">
                                <div className="padding-container">
                                    <div className="woocommerce columns-3">
                                        {wooItems.length ? (
                                            <ul className="products columns-columns-3 js_animated">
                                                {womenLists.slice(1).map((items, index, row) => (
                                                    <ProductsItems items={items} check={index} key={index + 3} row={row} height={'170px'} />
                                                ))}
                                            </ul>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row small-collapse">
                <div className="small-12 columns">
                    <div className="site-content">
                        <div className="wpb_wrapper">
                            <h3 style={{ textAlign: 'center' }}>Men Products</h3>
                            <h6 style={{ textAlign: 'center' }}>
                                <span style={{ color: '#777777' }}>Add our new arrivals to your weekly lineup</span>
                            </h6>
                        </div>
                        <div className="row small-collapse">
                            <div className="small-6 columns">
                                <div className="padding-container">
                                    <div className="woocommerce columns-1">
                                        {wooItems.length ? (
                                            <ul className="products columns-columns-1 js_animated">
                                                {menLists.slice(0, 1).map((items, index, row) => (
                                                    <ProductsItems items={items} check={index} key={index + 4} row={row} height={'560px'} />
                                                ))}
                                            </ul>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                            <div className="small-6 columns">
                                <div className="padding-container">
                                    <div className="woocommerce columns-3">
                                        {wooItems.length ? (
                                            <ul className="products columns-columns-3 js_animated">
                                                {menLists.slice(1, 7).map((items, index, row) => (
                                                    <ProductsItems items={items} check={index} key={index + 5} row={row} height={'170px'} />
                                                ))}
                                            </ul>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row small-collapse">
                <div className="small-12 columns">
                    <div className="site-content">
                        <div className="wpb_wrapper">
                            <h3 style={{ textAlign: 'center' }}>It’s All New, It All Arrived This Week</h3>
                            <h6 style={{ textAlign: 'center' }}>
                                <span style={{ color: '#777777' }}>Add our new arrivals to your weekly lineup</span>
                            </h6>
                        </div>
                        <div className="woocommerce columns-3">
                            {wooItems.length ? (
                                <ul className="products columns-columns-3 js_animated">
                                    {wooItems.filter(items => items.date_tag === "New").slice(0, 3).map((items, index, row) => (
                                        <ProductsItems items={items} check={index} key={index + 6} row={row} height={'370px'} />
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Content
