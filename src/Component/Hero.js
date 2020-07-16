import React from 'react';
import { Jumbotron,Container,Row,Col } from 'react-bootstrap';

const Hero = (props) => {
    return (
        <Jumbotron className='bg-transparent jumbotron-fluid p-0' >
            <Container fluid={true}>
                <Row className='justify-content-center py-5'>
                    <Col md={8} sm={12}>
                        {props.hero.title && <h1 className='display-1 font-weight-bolder'>{props.hero.title}</h1>}
                        {props.hero.subTitle && <h3 className='display-4 font-weight-light'>{props.hero.subTitle}</h3>}
                        {props.hero.text && <h3 className='lead font-weight-light'>{props.hero.text}</h3>}
                    </Col>
                </Row>
            </Container>
       </Jumbotron>
    );
}

export default Hero;
