import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../LeftSide/LeftSide';

const Courses = () => {
 
    return (
        <Container>
        <Row className='my-5'>
            <Col lg={3}>
                <LeftSide></LeftSide>
            </Col>
        </Row>
        </Container>
    );
};

export default Courses;