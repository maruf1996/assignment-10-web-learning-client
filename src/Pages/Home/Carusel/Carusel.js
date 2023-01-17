import React from 'react';
import { Carousel } from 'react-bootstrap';
import carusel1 from '../../../img/carusel/carusel-1.jpg';
import carusel2 from '../../../img/carusel/carusel-2.jpg';
import carusel3 from '../../../img/carusel/carusel-3.jpg';
import './Carusel.css';

const Carusel = () => {
    return (
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100 carusel_image"
            src={carusel1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 carusel_image"
            src={carusel2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 carusel_image"
            src={carusel3}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    );
};

export default Carusel;