import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import LeftSide from '../LeftSide/LeftSide';
import './Course.css';

const Course = () => {
    const allCategory=useLoaderData();

    return (
        <Container>
        <Row className='my-5'>
            <Col lg={3}>
                <LeftSide></LeftSide>
            </Col>
            <Col lg={9}>
            <Row xs={1} md={2} className="g-4 mt-1">
        {
            allCategory?.map(category=><Category
            key={category.id}
            category={category}
            ></Category>)
        }
        {
            allCategory.length===0 && <h1 className='text-center text-dark upcoming'>Upcoming Course...</h1>
        }
        </Row>
            </Col>
        </Row>
        </Container>
    );
};

export default Course;