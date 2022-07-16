import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import PageHeading from '../components/General/PageHeading';
import { FaArrowRight } from "react-icons/fa";
import logo from '../pages/Image/LOGO.png'




function About() {
    return (
        <div className='about-div mt-5 '>
            <Container>
                <div className='about-company-div'>
                    <PageHeading PageTitle='About us' />


                    <Row>
                        <Col lg={5} className='mt-3 center-in-div'>
                            <div className="hover14 column">
                                <div>
                                    <figure><Image className='img-fluid' src={logo} /></figure>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} className='mt-3'>
                            <p className='service-body-text'>&emsp;&emsp;&emsp; Ashvi Engineers is one of the trusted pattern makers in rajkot district.
                                We manufectures patterns of an <i><b>Aluminum, Wooden and Thermocol etc...</b></i>all type of designed and sample based patterns.
                            </p>
                            <p className='service-body-text'>&emsp;&emsp;&emsp; We have all type of machinery and biggest CNC milling machine (Router) in overall Rajkot district.
                            </p>
                            <p className='service-body-text'>&emsp;&emsp;&emsp; Our Company's Design management is handled by <i>Mr. Umesh Makvana</i> whom has more than 10 years of experiance in this industrial area.
                                And Company management is handled by <i>Mr. Sameer Kharecha</i> whom has more than 15 years of experiance in this industrial area. who is also proprietor in this company.</p>
                            <p className='service-body-text'>Thank you for visiting our website.</p>
                        </Col>



                    </Row>
                </div>
            </Container>
            <Container>
                <div className='mt-5 about-company-div'>
                    <PageHeading PageTitle='Our Vision' />
                    <Row className='center'>
                        <Col className='' lg={8}>
                            <p className='service-body-text'><FaArrowRight />&emsp;Our service is your dream project.</p>
                            <p className='service-body-text'><FaArrowRight />&emsp;To provide high quality patterns to the clients and achieve their expectations.</p>
                            <p className='service-body-text'><FaArrowRight />&emsp;To maintains integrity and build strong relationship with the clients.</p>
                            <p className='service-body-text'><FaArrowRight />&emsp;To be the best Service Provider in overall India.</p>
                            <p className='text-center pt-5 service-body-text'>"Effectively, change is almost impossible without industry-wide collaboration, cooperation, and consensus." <b>– Simon Mainwaring</b></p>
                        </Col>

                    </Row>
                </div>
            </Container>


        </div>
    )
}

export default About