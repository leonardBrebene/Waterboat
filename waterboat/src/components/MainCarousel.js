import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import "./MainCarousel.css";



class MainCarousel extends React.Component {
    render() {
        var setting = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...setting}>
                <div className="slide">
                    <img className="slide-img" src="images/boat1.jpg" alt="boat1" />
                </div>
                <div className="slide">
                    <img className="slide-img" src="images/boat2.jpg" alt="boat2" />
                </div>
                <div className="slide">
                    <img className="slide-img" src="images/boat3.jpg" alt="boat3" />
                </div>
            
            </Slider>
            
        );
    }
}

export default MainCarousel;