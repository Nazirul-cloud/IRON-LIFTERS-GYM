import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../Images/slider-bg-1.jpg';
import slider2 from '../../../Images/slider-bg-2.jpg';
import slider3 from '../../../Images/slider-bg-3.jpg';
import { MdOutlineWavingHand } from "react-icons/md";


const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="First slide"
                    />
                    <Carousel.Caption className="m-5 p-5 text-danger">
                        <h1 className="fw-bold fs-1">HI, <MdOutlineWavingHand/> THIS IS IRON LIFTERS</h1>
                        <p className="text-light">A Human Being’s right to life implies his right to have the free and unrestricted</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="m-5 p-5 text-danger">
                        <h1 className="fw-bold fs-1">WELCOME TO IRON GYM</h1>
                        <p className="text-light">Iron lifters is a cutting-edge functional fitness system that can help everyday men.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="m-5 p-5 text-danger">
                        <h1 className="fw-bold fs-1">JOIN US NOW</h1>
                        <p className="text-light">These reports started to surface when Congress was having hearings about the painkiller, Vioxx.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;