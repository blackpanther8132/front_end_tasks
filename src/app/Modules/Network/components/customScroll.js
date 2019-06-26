import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './styles.css';
import Rectangle from '../../../../assets/Rectangle.png';

const scroll = () => {
    return (
        <div className="container servicesContainer">
            <h3 className="text_left head_color_1">Services</h3>
            <div className="">
                {/* <CustomScroll> */}
                <Scrollbars className="Scrollbar">

                    <div className="ServiceCard">

                        <img src={Rectangle} alt="" title="" className="img-responsive" />
                    </div>
                    <div className="ServiceCard">

                        <img src={Rectangle} alt="" title="" className="img-responsive" />
                    </div>
                    <div className="ServiceCard">

                        <img src={Rectangle} alt="" title="" className="img-responsive" />
                    </div>

                    <div className="ServiceCard">

                        <img src={Rectangle} alt="" title="" className="img-responsive" />
                    </div>

                    <div className="ServiceCard">

                        <img src={Rectangle} alt="" title="" className="img-responsive" />
                    </div>
                    <div className="ServiceCard">

                        <img src={Rectangle} alt="" title="" className="img-responsive" />
                    </div>

                    <div className="ServiceCard">

                        <img src={Rectangle} alt="" title="" className="img-responsive" />
                    </div>
                </Scrollbars>

                {/* </CustomScroll> */}
            </div>
        </div>
    )
}

export default scroll;