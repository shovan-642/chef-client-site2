import React from 'react';
import bannerImg from "../../../public/images/banner.jpg";
import "./Banner.css"
import {Image} from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Image src={bannerImg} fluid />;
        </div>
    );
};

export default Banner;