import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer shadow-lg'>
           <Row>
            <Col lg={4} className='footer_link'>
            <h5 className='fw-bold mb-3'>Services</h5>
            <Link to='/'>Home</Link>
            <Link to='/course'>Course</Link>
            <Link to='/blog'>Blog</Link>
            </Col>
            <Col lg={4} className='footer_link'>
            <h5 className='fw-bold mb-3'>Contact</h5>
            <span>Mobile-</span>
            <span>01778907918</span>
            <span>01978907918</span>
            </Col>
            <Col lg={4} className='footer_link'>
            <h5 className='fw-bold mb-3'>LEGAL</h5>
            <Link to='/faq'>FAQ</Link>
            <Link to='/login'>Log in</Link>
            <Link to='/register'>Sign up</Link>
            </Col>
           </Row>
           <p className='text-center mt-4'>Copyright © 2022 Web School.</p>
        </div>
    );
};

export default Footer;