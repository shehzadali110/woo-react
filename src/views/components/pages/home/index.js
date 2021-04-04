import React, { Component } from 'react';
import { WpReact } from '../../../../context';
// import Slider from '../../slider/index';
import Content from './content';

export default class Home extends Component {
    render() {
        return (
            <WpReact>
                {value => {
                    return (
                        <div className="site-content-wrapper site-content">
                            {/* <Slider /> */}
                            <article id="post-152" className="post-152 page type-page status-publish hentry">
                                <Content wooItems={value.wooPro} />
                            </article>
                            <div className="hover_overlay_content" />
                        </div>
                    )
                }}
            </WpReact>
        )
    }
}
