import React, { useRef, useState, useEffect } from "react";

const MegaMenu = (props) => {

    const { shopMenu, isHover, isHoverId } = props;

    const [showClass, setShowClass] = useState(false);

    const getElement = useRef();

    useEffect(function () {
        var navItems = "primary-panel-" + isHoverId,
            panelItems = getElement.current.id,
            result = isHover && navItems === panelItems;
        setShowClass(result);
    }, [isHoverId, isHover]);

    return (
        <React.Fragment>
            <div ref={getElement} id="primary-panel-76" className={`gbt-mega-menu-content dropdown-pane ${showClass ? "animated is-open" : ""}`}>
                <div className="megamenu_category_wrapper">
                    <div className="row">
                        <div className="large-12 columns">
                            {shopMenu.length ? (
                                <div className="megamenu_category_list row small-up-1 medium-up-3 large-up-4">
                                    {shopMenu.map((items, index) => (
                                        <div key={index} className="megamenu_category column">
                                            <a href={`#${items.slug}`}>
                                                <span style={{ backgroundImage: `url(${items.image !== null ? items.image.src : ''})` }}
                                                    className="megamenu_thumbnail rocket-lazyload" /> {items.name}
                                                <span className="count"> ({items.count}) </span>
                                            </a>
                                            <br />
                                            <div className="megamenu_subcategory_list">
                                                {items.child.map((sub, index) => (
                                                    <div key={index}>
                                                        <a href={`#${sub.slug}`}>{sub.name}
                                                            <span className="count"> ({sub.count}) </span>
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="megamenu_bottom_links">
                    <a href="/shop/?new-products=1">New Products</a>
                    <a href="/shop/?on-sale=1">On Sale!</a>
                </div>
                <div className="megamenu_cta"><p>50% SALE ON ALL WINTER ITEMS</p></div>
            </div>
            <div ref={getElement} id="primary-panel-78" className={`gbt-mega-menu-content dropdown-pane ${showClass ? "animated is-open" : ""}`}>
                {shopMenu.length ? (
                    <div className="megamenu_icon_list">
                        {shopMenu.map((items, index) => (
                            <a key={index} href={`#${items.slug}`}>
                                <i className="thehanger-icons-alignment_align-all-1"></i>
                                <span>{items.name}</span>
                            </a>
                        ))}
                    </div>
                ) : null}
            </div>

        </React.Fragment>

    )
}

export default MegaMenu
