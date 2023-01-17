import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import extraImg from '../../../img/extra.webp';
import './ExtraDesign.css';

const ExtraDesign = () => {
    return (
        <div className='extra_design'>
            <Row>
                <Col lg={6}>
                   <div className="extra_text">
                   <h1 className='mb-3 fw-bold'>Start for free</h1>
                    <p className='mb-4'>If you’ve made it this far, you must be at least a little curious. Sign up and take the first step toward your goals.</p>
                    <Link to='/register'><button className='btn btn-warning fw-bold'>Sign up</button></Link>
                   </div>
                </Col>
                <Col lg={6}>
                <img className='extra_image rounded' src={extraImg} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default ExtraDesign;