import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import './Detail.css';
const ref = React.createRef();


const Detail = ({detail}) => {
    const {name,details}=detail;

    return (
        <div className='detail'>
          <Row className="g-4">
            <Col>
              <Card className='detail_bg shadow'>
                <Card.Body ref={ref}>
                  <Card.Title className=''>{name}</Card.Title>
                  <Card.Text className='details'>
                   {details}
                  </Card.Text>
                  <Pdf targetRef={ref} filename="code.pdf">
                  {({ toPdf }) => <button onClick={toPdf} className='btn btn-danger float-end'>Create Pdf</button>}
                </Pdf>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<div />, rootElement);
export default Detail;