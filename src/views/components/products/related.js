import React from 'react';
import ProductItems from './items';

const Related = (props) => {

    const { getWooitem } = props;
    
    return (
        <div className="large-12 columns">
            <div className="after-product-summary">
                <section className="related products">
                    <h2>Related products</h2>
                    {getWooitem.length ? (
                        <ul className="products columns-4 js_animated">
                            {getWooitem.map((items, index, row) => (
                                <ProductItems items={items} check={index} key={index + 1} row={row} height={'270px'} />
                            ))}
                        </ul>
                    ) : null}
                </section>
            </div>
        </div>
    )
}

export default Related