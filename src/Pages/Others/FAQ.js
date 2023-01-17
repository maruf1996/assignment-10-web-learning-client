import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './FAQ.css';

const FAQ = () => {
    return (
            <Row className='faq'>
            <h3 className='fw-bold'>Have any Questions?</h3>
               <Col lg={6} className='text_faq'>
                <h4>What is This Web School?</h4>
                <p>Web School is an online web development learning website. We have undertaken this program to teach free web development to students. Hope all students stay with us.Thank you all.</p>
                </Col>
                <Col lg={6} className='text_faq'>   
                <h4>What is Your School Plan?</h4>
                <p>We put up this website to the best of our knowledge. We are also trying to work with all the resources to learn web development. Inshallah, its range will be much bigger in future.</p>
                </Col>
            </Row>
    );
};

export default FAQ;