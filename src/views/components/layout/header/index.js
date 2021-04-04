import React, { useEffect, useState } from 'react';
import TopBar from './top';
import Header from './header';

const MainHeader = (props) => {

    const [sticky, setsticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (sticky === false) {
                if (window.pageYOffset > 130) {
                    setsticky(true);
                }
            } else {
                if (window.pageYOffset < 130) {
                    setsticky(false);
                }
            }
        });
    }, [sticky]);

    return (
        <React.Fragment>
            <TopBar tagDate={props.topbar} />
            <Header navItems={props.navBar} wooCatItems={props.wooCat} />
            <div className={`sticky_header_placeholder ${sticky ? "visible" : ""}`}>
                <TopBar tagDate={props.topbar} />
                <Header navItems={props.navBar} wooCatItems={props.wooCat} fixed={sticky} />
            </div>
        </React.Fragment>
    )
}

export default MainHeader;