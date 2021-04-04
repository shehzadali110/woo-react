import React from 'react';

const Newsletter = () => {
    return (
        <div className="column">
            <aside id="woocommerce_product_search-2" className="widget woocommerce widget_product_search">
                <form role="search" method="get" className="woocommerce-product-search" >
                    <label className="screen-reader-text" htmlFor="woocommerce-product-search-field-1">Search for:</label>
                    <input type="search" id="woocommerce-product-search-field-1" className="search-field" 
                    placeholder="Search products…" name="s" />
                    <button type="submit" value="Search">Submit</button>
                </form>
            </aside>
        </div>
    )
}

export default Newsletter
