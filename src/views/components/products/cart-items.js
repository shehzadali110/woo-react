import { Link } from 'react-router-dom';

const CartItems = (props) => {

    const { cartItem, updateItem, removeItem, cartTotal } = props;

    return (
        <article className="page type-page hentry">
            <header className="entry-header">
                <h1 className="entry-title">Cart</h1>
            </header>

            <div className="entry-content">
                <div className="woocommerce">
                    <div className="woocommerce-notices-wrapper"></div>
                    <div className="woocommerce-cart-form">
                        <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th className="product-remove">&nbsp;</th>
                                    <th className="product-thumbnail">&nbsp;</th>
                                    <th className="product-name">Product</th>
                                    <th className="product-price">Price</th>
                                    <th className="product-quantity">Quantity</th>
                                    <th className="product-subtotal">Subtotal</th>
                                </tr>
                            </thead>

                            <tbody>

                                {cartItem.map((item, index) => (

                                    <tr key={index} className="woocommerce-cart-form__cart-item cart_item">

                                        <td className="product-remove" onClick={() => { removeItem(item.id) }}>
                                            <Link to="/cart" className="remove">×</Link>
                                        </td>

                                        <td className="product-thumbnail">
                                            <Link to={`/${item.slug}`}>
                                                <img width="330" height="413" src={item.images[0].src} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt={item.images[0].slug} />
                                            </Link>
                                        </td>

                                        <td className="product-name">
                                            <Link to={`/${item.slug}`}>{item.name}</Link>
                                        </td>

                                        <td className="product-price">
                                            <span className="woocommerce-Price-amount amount">
                                                <bdi><span className="woocommerce-Price-currencySymbol">₨</span> {item.sale_price}</bdi>
                                            </span>
                                        </td>

                                        <td className="product-quantity">
                                            <div className="quantity">
                                                <label className="screen-reader-text" htmlFor={`${item.id}-quantity-${item.slug}`}>Belt quantity</label>
                                                <input
                                                    type="number"
                                                    id={`${item.id}-quantity-${item.slug}`}
                                                    className="input-text qty text"
                                                    min={0}
                                                    max={10}
                                                    defaultValue={1}
                                                    title="Qty"
                                                    size="4"
                                                    onChange={(e) => { updateItem(e) }}
                                                    inputMode="numeric"
                                                />
                                            </div>
                                        </td>

                                        <td className="product-subtotal">
                                            <span className="woocommerce-Price-amount amount">
                                                <bdi><span className="woocommerce-Price-currencySymbol">₨</span> {item.price}</bdi>
                                            </span>
                                        </td>
                                    </tr>
                                ))}

                                {/* <tr>
                                    <td colSpan="6" className="actions">
                                        <div className="coupon">
                                            <label htmlFor="coupon_code">Coupon:</label> <input type="text" name="coupon_code" className="input-text" id="coupon_code" value="" placeholder="Coupon code" />
                                            <button type="submit" className="button" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                                        </div>

                                        <button type="submit" className="button" name="update_cart" value="Update cart" disabled="" aria-disabled="true">Update cart</button>

                                        <input type="hidden" id="woocommerce-cart-nonce" name="woocommerce-cart-nonce" value="1aaea6aa91" /><input type="hidden" name="_wp_http_referer" value="/cart/" />
                                    </td>
                                </tr> */}

                            </tbody>

                        </table>
                    </div>

                    <div className="cart-collaterals">
                        <div className="cart_totals">
                            <h2>Cart totals</h2>

                            <table cellSpacing="0" className="shop_table shop_table_responsive">
                                <tbody>
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td data-title="Subtotal">
                                            <span className="woocommerce-Price-amount amount">
                                                <bdi><span className="woocommerce-Price-currencySymbol">₨</span>{cartTotal}</bdi>
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="order-total">
                                        <th>Total</th>
                                        <td data-title="Total">
                                            <strong>
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi><span className="woocommerce-Price-currencySymbol">₨</span>{cartTotal}</bdi>
                                                </span>
                                            </strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="wc-proceed-to-checkout">
                                <Link to="/checkout" className="checkout-button button alt wc-forward"> Proceed to checkout</Link>
                            </div>

                            <div className="continue-shopping"><Link to="/" className="button">Continue shopping</Link></div>
                        </div>
                    </div>

                    <div id="cart_bottom_anchor"></div>
                </div>
            </div>

        </article>
    )
}

export default CartItems