import React from 'react';

import { Parallax } from 'react-parallax';
import triund_india from './../assets/triund_india.jpg';

const Section2 = () => (
    <Parallax className="image" bgImage={triund_india} strength={200}>
        <div className="content">
            <span className="img-txt">
            Second Content goes here. Parallax height grows with content height.
            </span>
        </div>
    </Parallax>
);

export default Section2;