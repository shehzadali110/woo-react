import React from 'react';
import TopFooter from './top';
import FooterMenus from './navs';
import BottomFooter from './bottom';
import Newsletter from './newsletter';

const Footer = (props) => {

    return (
        <footer className="site-footer">
            <TopFooter />
            <div className="footer-style-1">
                <div className="row small-collapse">
                    <div className="large-12 columns">
                        <div className="footer-content">
                            <div className="trigger-footer-widget-area">
                                <span className="trigger-footer-widget-icon thehanger-icons-ui_expand" />
                            </div>
                            <aside className="widget-area">
                                <div className="row small-up-1 medium-up-2 large-up-6">
                                    <Newsletter />
                                    <FooterMenus footerMenu={props.footerMenus} />
                                </div>
                            </aside>
                            <div className="row align-top">
                                <BottomFooter bottomFooter={props.bottomMenu} />
                            </div>
                            <div className="hover_overlay_footer" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;