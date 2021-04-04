import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from '../social/index';

const Quick = (props) => {

    const { getItem, closeItem } = props;

    return (
        <div className={`site-content ${getItem[1] ? 'open' : ''}`} id="getbowtied_woocommerce_quickview">
            {null !== getItem[0] && true === getItem[1] ? (
                <div className="getbowtied_qv_content site-content maybe_scroll">
                    <button className="close-button" type="button" onClick={closeItem}>
                        <span>×</span>
                    </button>
                    <div className="row small-collapse">
                        <div className="small-12 columns">
                            <div className="site-content">
                                <div id={`product-${getItem[0].id}`} className={`product type-product post-${getItem[0].id} status-${getItem[0].status} ${getItem[0].stock_status} product_cat-junior has-post-thumbnail ${getItem[0].downloadable && "downloadable"} ${getItem[0].virtual && "virtual"} ${getItem[0].purchasable && "purchasable"} product-type-${getItem[0].type} ${getItem[0].catalog_visibility && 'visible'} animation_ready animated`}>
                                    <div className="row">
                                        <div className="small-12 large-7 columns">
                                            <div className="before-product-summary-wrapper">
                                                <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-6 images" style={{ opacity: 1, transition: 'opacity 0.25s ease-in-out 0s' }}>
                                                    <figure className="woocommerce-product-gallery__wrapper">
                                                        <div className="woocommerce-product-gallery__image">
                                                            <Link to="/"><img width={768} height={768} src={getItem[0].images[0].src} className="wp-post-image" alt={getItem[0].name} loading="lazy" title={getItem[0].name} /></Link>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="small-12 large-5 columns">
                                            <div className="summary entry-summary">
                                                <h1 className="product_title entry-title">{getItem[0].name}</h1>
                                                <p className="price">
                                                    {getItem[0].sale_price ?
                                                        <span className="price">
                                                            <del>
                                                                <span className="woocommerce-Price-amount amount">
                                                                    <bdi><span className="woocommerce-Price-currencySymbol">₨</span>
                                                                        {getItem[0].regular_price}.00</bdi>
                                                                </span>
                                                            </del>
                                                            <ins>
                                                                <span className="woocommerce-Price-amount amount">
                                                                    <bdi><span className="woocommerce-Price-currencySymbol"> ₨</span>
                                                                        {getItem[0].sale_price}.00</bdi>
                                                                </span>
                                                            </ins>
                                                        </span>
                                                        :
                                                        <span className="price">
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi><span className="woocommerce-Price-currencySymbol">₨</span>
                                                                    {getItem[0].regular_price}.00</bdi>
                                                            </span>
                                                        </span>
                                                    }
                                                </p>
                                                <div className="woocommerce-product-details__short-description">
                                                    <p>This is a simple product.</p>
                                                </div>
                                                <Link to="/" className="go_to_product_page">Go to product page</Link>

                                                {getItem[0].inCart ?
                                                    <Link to="/cart" className="single_add_to_cart_button button alt" style={{ marginBottom: '3rem', width: '100%' }} onClick={closeItem}>View cart</Link>
                                                    :
                                                    <form className="cart">
                                                        <div className="add_to_cart_wrapper">
                                                            <div className="quantity">
                                                                <label className="screen-reader-text" htmlFor={`${getItem[0].id}-quantity-${getItem[0].slug}`}>{getItem[0].name} quantity</label>
                                                                <input type="number" id={`${getItem[0].id}-quantity-${getItem[0].slug}`} className="input-text qty text" name="quantity" defaultValue={1} title="Qty" min={1} max={50} size={4} inputMode="numeric" />
                                                            </div>
                                                            <button type="submit" name="add-to-cart" value={getItem[0].id} className="single_add_to_cart_button button alt">Add to cart</button>
                                                        </div>
                                                    </form>
                                                }

                                                <div className="getbowtied-single-product-share-wrapper">
                                                    <span className="getbowtied-single-product-share">Share</span>
                                                    <SocialIcons />
                                                </div>
                                                <div className="product_meta">
                                                    <span className="sku_wrapper">SKU:
                                                            <span className="sku">{getItem[0].sku}</span>
                                                    </span>
                                                    <span className="posted_in">Category:
                                                        {getItem[0].categories.map((items, index) => (
                                                        <Link key={index} to="/" rel="tag">{items.name}</Link>
                                                    ))}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Quick;