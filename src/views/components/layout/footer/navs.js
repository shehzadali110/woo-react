import React from 'react';
import { Link } from 'react-router-dom';

const FooterMenus = (props) => {

    const { footerMenu } = props;

    return (
        <React.Fragment>

            {footerMenu.length ? (
                <React.Fragment>

                    {footerMenu.map((items, index) => (
                        <div key={index} className="column">
                            <aside id={`nav_menu-${index}`} className="widget widget_nav_menu">
                                <h4 className="widget-title">{items.name.replace("Footer - ", "")}</h4>
                                <div className={`menu-${items.slug}-container`}>
                                    <ul id={`menu-footer-${items.slug}`}>
                                        {footerMenu[index].items.map((items, index) => (
                                            <li key={index} className={`menu-item menu-item-type-${items.type} menu-item-object-${items.object} menu-item-${items.id}`} role="menuitem">
                                                <Link to={`/${items.object_slug}`}>{items.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    ))}

                </React.Fragment>
            ) : null}

        </React.Fragment>
    )
}

export default FooterMenus;