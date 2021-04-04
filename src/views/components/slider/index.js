import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default class Slider extends Component {
    render() {
        return (
            <AwesomeSlider
                screens={[
                    {
                        backgroundColor: '#4a9c8c',
                        media: '/images/series/ricknmorty-3.png',
                        caption: 'I want to see what you got.',
                    },
                    {
                        backgroundColor: '#4a9c8c',
                        media: '/images/series/ricknmorty-3.png',
                        caption: "The answer is -- Don't think about it.",
                    },
                ]}
            />
        )
    }
}
