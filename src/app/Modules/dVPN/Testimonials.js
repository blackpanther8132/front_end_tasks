import React, { Component } from 'react';
import Slider from "react-slick";
import './Testi.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const content = [
    {
        head: "Anissa Ross",
        Position: 'CEO',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    },
    {
        head: "Anissa Ross",
        Position: 'CEO',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    },
    {
        head: "Anissa Ross",
        Position: 'CEO',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    },
    {
        head: "Anissa Ross",
        Position: 'CEO',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    },
    {
        head: "Anissa Ross",
        Position: 'CEO',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    },
    {
        head: "Anissa Ross",
        Position: 'CEO',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    }
]
class ReactSlickDemo extends React.Component {
    render() {

        var settings = {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
        };
        return (
            <div className="testiMain">
                <h2 className="TestiHead"> Testimonials </h2>

                <div className="testimonialDiv">
                    <Slider {...settings}>
                        {
                            content.map(item => (

                                <div>
                                    <div className="CardMainDiv">
                                        <div className="CircleMainDiv"><span className="CircleDiv"></span></div>
                                        <div className="CardContent">
                                            <h4> {item.head} </h4>
                                            <span> {item.Position} </span>
                                            <p> {item.para}</p>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </Slider>
                </div>
            </div>
        );
    }
}

export default ReactSlickDemo;
