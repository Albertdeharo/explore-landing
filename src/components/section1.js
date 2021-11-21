import { Parallax } from 'react-parallax';
import lofoten_norway from './../assets/lofoten_norway.jpg';

const Section1 = () => (
    <Parallax className="image" bgImage={lofoten_norway} strength={200}>
        <div className="content">
            <span className="img-txt">
            Content goes here. Parallax height grows with content height.
            </span>
        </div>
    </Parallax>
);

export default Section1;