import React from 'react';
import { WpReact } from '../../../context';
import { Link } from 'react-router-dom';

const ProductItems = (props) => {

    const { items, check, row, height } = props;

    return (
        <WpReact>
            {value => {
                return (
                    <li className={`product type-product post-${items.id} status-${items.status} ${check === 0 && "first"} ${row.length - 1 === check && 'last'} ${items.stock_status} product_cat-${items.categories[0].slug} has-post-thumbnail ${items.downloadable && "downloadable"} ${items.virtual && "virtual"} ${items.purchasable && "purchasable"} product-type-${items.type} ${items.catalog_visibility && 'visible'} animation_ready animated`}>
                        <div className={`main-container ${items.inCart ? "adding" : ""}`}>
                            <div className="product_image_wrapper">
                                <div className="product_badges_wrapper">
                                    {items.date_tag === "New" ? <span className="getbowtied_new_product">{items.date_tag}!</span> : null}
                                    {items.sale_price ? <span className="onsale">Sale!</span> : null}
                                </div>
                                <div className="product_image" onClick={() => { value.handleDetail(items.id) }}>
                                    <Link to={`${items.slug}/${items.id}`}>
                                        <img src={items.images[0].src} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt={items.images[0].slug} loading="lazy" />
                                    </Link>
                                </div>
                            </div>
                            <div className="second-container">
                                <div className="product_info">
                                    <Link to={`${items.slug}/${items.id}`} className="title" onClick={() => { value.handleDetail(items.id) }}>
                                        <h2 className="woocommerce-loop-product__title">{items.name}</h2>
                                    </Link>
                                    {items.sale_price ?
                                        <span className="price">
                                            <del>
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi><span className="woocommerce-Price-currencySymbol">₨ </span>
                                                        {items.regular_price}.00</bdi>
                                                </span>
                                            </del>
                                            <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi><span className="woocommerce-Price-currencySymbol"> ₨ </span>
                                                        {items.sale_price}.00</bdi>
                                                </span>
                                            </ins>
                                        </span>
                                        :
                                        <span className="price">
                                            <span className="woocommerce-Price-amount amount">
                                                <bdi><span className="woocommerce-Price-currencySymbol">₨ </span>
                                                    {items.regular_price}.00</bdi>
                                            </span>
                                        </span>
                                    }
                                </div>
                                <div className="buttons" style={{ height: height }}>
                                    <Link to="/" className={`getbowtied_product_quick_view_button`} onClick={() => { value.quickView(items.id) }}>
                                        <span className="tooltip">Quick View</span>
                                    </Link>

                                    {items.inCart ?

                                        <Link to="/cart" className="button product_type_simple add_to_cart_button ajax_add_to_cart clicked">
                                            <span className="tooltip">View cart</span>
                                        </Link>

                                        :

                                        <Link to="/" className="button product_type_simple add_to_cart_button ajax_add_to_cart" onClick={() => { value.addToCart(items.id) }}>
                                            <span className="tooltip">Add to cart</span>
                                        </Link>
                                    }

                                </div>
                            </div>
                        </div>
                    </li>
                )
            }}
        </WpReact>
    )
}

export default ProductItems