import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {name,level,lesson,id}=category;
    return (
        <Col>
          <Card className='card_bg shadow-lg'>
            <Card.Body>
              <Card.Title className='fs-5 mb-2' >Course</Card.Title>
                <h4>{name}</h4>
                <div className="d-flex">
                    <p  className='me-2'>{level}.</p>
                    <p >{lesson} Lessons</p>
                </div>
              <Link to={`details/${id}`} className='text-decoration-none float-end fw-bold text-info'>Details</Link>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Category;