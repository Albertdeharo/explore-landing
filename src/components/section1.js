import React from 'react';

import { Parallax } from 'react-parallax';
import lofoten_norway from './../assets/lofoten_norway.jpg';

import './nav.scss'

const Section1 = () => (
    <Parallax className="image" bgImage={lofoten_norway} strength={200}>
        <div className="nav">
            <ul>
                <li>link 1</li>
                <li>link 2</li>
                <li>link 3</li>
            </ul>
        </div>
        <div className="content">
            <span></span>
            <span className="img-txt">
            WIN A TRIP
            </span>
        </div>
    </Parallax>
);

export default Section1;