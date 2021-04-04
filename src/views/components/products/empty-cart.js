import { Link } from 'react-router-dom';

const EmptyCart = () => {

    return (
        <article className="page type-page hentry">

            <header className="entry-header">
                <h1 className="entry-title">Cart</h1>
            </header>

            <div className="entry-content">
                <div className="woocommerce">
                    <div className="woocommerce-notices-wrapper"></div>
                    <p className="cart-empty">Your cart is currently empty.</p>
                    <span className="after-cart-empty-title">You might like these</span>
                    <p className="return-to-shop">
                        <Link className="button wc-backward" to="/"> Return to shop </Link>
                    </p>
                </div>
            </div>

        </article>
    )
}

export default EmptyCart