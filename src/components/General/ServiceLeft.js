import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';


function ServiceLeft(props) {
    return (
        <>
            <Container>
                <div className='service-div'>
                    <Row className='center'>
                        <Col lg={6} className='padding-side'>
                            <h3><p className='service-heading'><b>{props.ServiceHeading}</b></p></h3>
                            <hr className='custom-hr-75' />
                            <p className='service-body-text'>&emsp;&emsp;&emsp; {props.ServiceDetails1}</p>
                            <p className='service-body-text'>{props.ServiceDetails2}</p>
                        </Col>
                        <Col lg={4} className='center-in-div'>
                            <div className="hover01 column">
                                <div>
                                    <figure><Image className='img-fluid service-div-img' src={props.ServiceImageSrc}></Image></figure>
                                </div>

                            </div>


                        </Col>
                    </Row>
                </div>
            </Container>

        </>
    )
}

export default ServiceLeft;