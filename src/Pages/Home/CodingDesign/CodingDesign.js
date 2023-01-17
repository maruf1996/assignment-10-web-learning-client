import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../img/web.jpg';
import './CodingDesign.css';

const CodingDesign = () => {
    return (
        <div className='coding_container'>
           <div className="coding">
           <Row className=''>  
                <Col lg={7} className=''>
                    <img className='coding_image rounded' src={img} alt="" />
                </Col>
                <Col lg={5}>
                    <div className="coding_text">
                    <h6 className='mb-3 fw-bold'>Beginners welcome</h6>
                    <h1 className='mb-3 fw-bold'>Start coding in seconds</h1>
                    <p className='mb-4'>Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.</p>
                    <Link to='/course'><button className='coding_btn'>Continue lesson</button></Link>
                    </div>
                </Col>
            </Row>
           </div>
        </div>
    );
};

export default CodingDesign;