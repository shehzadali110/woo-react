import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import SocialIcons from '../social';
import Comment from './comment';
import Related from './related';

export const SingleProduct = (props) => {

    const { wooSingPro } = props;

    const [showClass, setShowClass] = useState(null);

    useEffect(() => {
        document.body.classList.add('single-product', 'woocommerce', 'woocommerce-page', 'woocommerce-js');
    });

    return (
        <div className="site-content-wrapper site-content">
            <div className="row small-collapse">
                <div className="small-12 columns">

                    {Object.keys(wooSingPro).length ? (

                        <div key={wooSingPro.slug} className="site-content">

                            <div id={`product-${wooSingPro.id}`} className={`product type-product post-${wooSingPro.id} status-${wooSingPro.status} instock product_cat-${wooSingPro.categories[0].slug} has-post-thumbnail ${wooSingPro.on_sale && 'sale'} ${wooSingPro.featured && 'featured'} ${wooSingPro.shipping_taxable && 'shipping-taxable'} ${wooSingPro.purchasable && 'purchasable'} product-type-${wooSingPro.type}`}>
                                <div className="product_infos">
                                    <div className="row">
                                        <div className="small-12 large-7 columns">
                                            <div className="before-product-summary-wrapper" id="sticky_bottom_anchor">
                                                <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-6 images" data-columns={4} style={{ opacity: 1, transition: 'opacity 0.25s ease-in-out 0s' }}>
                                                    <Link to={`/${wooSingPro.slug}`} className="woocommerce-product-gallery__trigger">
                                                        <img draggable="false" className="emoji" alt="🔍" src={wooSingPro.images[0].src} />
                                                    </Link>
                                                    <figure className="woocommerce-product-gallery__wrapper">
                                                        <div className="woocommerce-product-gallery__image" style={{ position: 'relative', overflow: 'hidden' }}>
                                                            <Link to={`/${wooSingPro.slug}`}>
                                                                <img width={768} height={768} src={wooSingPro.images[0].src} className="wp-post-image" alt={wooSingPro.images[0].name} loading="lazy" title={wooSingPro.images[0].name} />
                                                            </Link>
                                                            <img role="presentation" alt={wooSingPro.images[0].name} src={wooSingPro.images[0].src} className="zoomImg" style={{ position: 'absolute', top: '-132.004px', left: '-87.5928px', opacity: 0, width: '800px', height: '800px', border: 'none', maxWidth: 'none', maxHeight: 'none' }} />
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="product_badges_wrapper">
                                                    {wooSingPro.date_tag === "New" ? <span className="getbowtied_new_product">{wooSingPro.date_tag}!</span> : null}
                                                    {wooSingPro.sale_price ? <span className="onsale">Sale!</span> : null}
                                                </div>
                                                <div className="product_tool_buttons_placeholder loaded">
                                                    <div className="single_product_gallery_trigger"><span className="tooltip">Zoom</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="small-12 large-5 columns">
                                            <div className="summary entry-summary">
                                                <nav className="woocommerce-breadcrumb">
                                                    <Link to="/">Home</Link>
                                                    <span className="delimiter">/</span>
                                                    <Link to="/shop">Shop</Link>
                                                    <span className="delimiter">/</span>
                                                    <Link to="#Women">Women</Link>
                                                    <span className="delimiter">/</span>
                                                    <Link to="#Dresses">Dresses</Link>
                                                    <span className="delimiter">/</span>Beanie with Logo
                                                </nav>
                                                <h1 className="product_title entry-title">{wooSingPro.name}</h1>
                                                {wooSingPro.sale_price ?
                                                    <p className="price">
                                                        <del>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi><span className="woocommerce-Price-currencySymbol">₨</span>
                                                                    {wooSingPro.regular_price}.00</bdi>
                                                            </span>
                                                        </del>
                                                        <ins>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi><span className="woocommerce-Price-currencySymbol"> ₨</span>
                                                                    {wooSingPro.sale_price}.00</bdi>
                                                            </span>
                                                        </ins>
                                                    </p>
                                                    :
                                                    <p className="price">
                                                        <span className="woocommerce-Price-amount amount">
                                                            <bdi><span className="woocommerce-Price-currencySymbol">₨</span>
                                                                {wooSingPro.regular_price}.00</bdi>
                                                        </span>
                                                    </p>
                                                }

                                                <div className="woocommerce-product-details__short-description">
                                                    {renderHTML(wooSingPro.short_description)}
                                                </div>

                                                {wooSingPro.external_url === true && wooSingPro.button_text === true ?

                                                    <div class="add_to_cart_wrapper"><p class="cart">
                                                        <Link to={wooSingPro.external_url} target="_blank" rel="nofollow" class="single_add_to_cart_button button alt">
                                                            {wooSingPro.button_text}
                                                        </Link>
                                                    </p></div>

                                                    :

                                                    <form className="cart" action="#a" method="post" encType="multipart/form-data">
                                                        <div className="add_to_cart_wrapper">
                                                            <div className="quantity">
                                                                <label className="screen-reader-text" htmlFor="quantity_6057373e43c52">Beanie with Logo quantity</label>
                                                                <input type="number" id="quantity_6057373e43c52" className="input-text qty text" step={1} min={1} name="quantity" defaultValue={1} title="Qty" size={4} inputMode="numeric" />
                                                            </div>
                                                            <button type="submit" name="add-to-cart" value={26} className="single_add_to_cart_button button alt">Add to cart</button>
                                                        </div>
                                                    </form>
                                                }

                                                <div className="getbowtied-single-product-share-wrapper">
                                                    <span className="getbowtied-single-product-share">Share</span>
                                                    <SocialIcons />
                                                </div>

                                                <div className="woocommerce-gb_accordion">
                                                    <ul className="accordion">

                                                        <li className={`accordion-item ${showClass === 'tab-description' ? ' is-active' : ''}`}>
                                                            <a className="accordion-title description_tab" href="#tab-description" onClick={() => setShowClass('tab-description')}> Description </a>
                                                            <div className="accordion-content woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" style={{ display: showClass === 'tab-description' ? 'block' : 'none' }}>
                                                                {renderHTML(wooSingPro.description)}
                                                            </div>
                                                        </li>

                                                        <li className={`accordion-item ${showClass === 'tab-additional_information' ? ' is-active' : ''}`}>
                                                            <a className="accordion-title additional_information_tab" href="#tab-additional_information" onClick={() => setShowClass('tab-additional_information')}>
                                                                Additional information</a>
                                                            <div className="accordion-content woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab" style={{ display: showClass === 'tab-additional_information' ? 'block' : 'none' }}>
                                                                <table className="woocommerce-product-attributes shop_attributes">
                                                                    <tbody>
                                                                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_color">
                                                                            <th className="woocommerce-product-attributes-item__label">color</th>
                                                                            <td className="woocommerce-product-attributes-item__value"><p>Red</p></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </li>

                                                        <li className={`accordion-item ${showClass === 'tab-reviews' ? ' is-active' : ''}`}>
                                                            <a className="accordion-title reviews_tab" href="#tab-reviews" onClick={() => setShowClass('tab-reviews')}> Reviews ({wooSingPro.rating_count}) </a>
                                                            <div className="accordion-content woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" style={{ display: showClass === 'tab-reviews' ? 'block' : 'none' }}>
                                                                <div id="reviews" className="woocommerce-Reviews">
                                                                    <div id="comments">
                                                                        <h2 className="woocommerce-Reviews-title"> Reviews </h2>
                                                                        <p className="woocommerce-noreviews">There are no reviews yet.</p>
                                                                    </div>

                                                                    {wooSingPro.reviews_allowed ? <Comment /> : null}

                                                                    <div className="clear" />
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="product_meta">
                                                    <span className="sku_wrapper">SKU:
                                                            <span className="sku"> {wooSingPro.sku}</span>
                                                    </span>
                                                    <span className="posted_in">Category:
                                                        {wooSingPro.categories.map((items, index) => (
                                                        <React.Fragment>
                                                            <Link key={index} to="/" rel="tag"> {items.name}</Link>,
                                                        </React.Fragment>
                                                    ))}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {wooSingPro.related_products ?
                                <div className="row">
                                    <Related getWooitem={wooSingPro.related_products} />
                                </div>
                                : null
                            }

                        </div>

                    ) : null}

                </div>
            </div>
            <div className="hover_overlay_content" />
        </div>
    )
}

export default SingleProduct