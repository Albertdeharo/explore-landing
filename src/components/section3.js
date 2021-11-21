import { Parallax } from 'react-parallax';
import route from './../assets/route.jpg';

const Section3 = () => (
    <Parallax className="image" bgImage={route} strength={200}>
        <div className="content">
            <span className="img-txt">
            Third Content goes here. Parallax height grows with content height.
            </span>
        </div>
    </Parallax>
);

export default Section3;