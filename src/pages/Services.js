import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import PageHeading from '../components/General/PageHeading'
import ServiceLeft from '../components/General/ServiceLeft'
import ServiceRight from '../components/General/ServiceRight'
import Pattern from '../pages/Image/all-type-pattern.jpeg'
import Art from '../pages/Image/Art-wooden-work.jpeg'
import Jig from '../pages/Image/Jig-Fixture.jpeg'
import Plan from '../pages/Image/Metal-development-plan.jpeg'

function Services() {
    return (
        <div className='mt-5 servicepage-div'>
            <PageHeading PageTitle='Our Services' />
            <ServiceLeft
                ServiceHeading='All type of Patterns'
                ServiceDetails1='We manufactures patterns of all type of materials such as Aluminium, Wooden (small and huge in size) and also Thermocol.'
                ServiceDetails2='We also creates Core box elements like Aluminium & SG Core Box, Hot core & Cold core etc....'
                ServiceImageSrc={Pattern}
            />
            <ServiceRight
                ServiceHeading='Jig fixture'
                ServiceDetails1='To achieve our clients requirment, We also makes Jig fixtures for CNC, VMC, Drill, Lathe Machine Tools etc...All type of machines tools.'
                ServiceDetails2='As well, these products are well tested prior getting dispatched at the premises of our clients.'
                ServiceImageSrc={Jig}
            />

            <Container>
                <div className='service-div'>
                    <Row className='center'>
                        <Col lg={6} className='padding-side'>
                            <h3><p className='service-heading'><b>Art wooden works</b></p></h3>
                            <hr className='custom-hr-75' />
                            <p className='service-body-text'>&emsp;&emsp;&emsp; This is one of the Important service of our company. With the help of great tool, we provides best quality wooden work services such as</p>
                            <p className='service-body-text'><FaArrowRight />&emsp; Helps to Design and Create architect based art wooden work.</p>
                            <p className='service-body-text'><FaArrowRight />&emsp; Wooden art work for Personal purposed project.</p>
                            <p className='service-body-text'><FaArrowRight />&emsp; Wooden door cutting as per design.</p>
                            <p className='service-body-text'><FaArrowRight />&emsp; All type of carving work as per the design on wood.</p>
                        </Col>
                        <Col lg={4} className='center-in-div'>
                            <div className="hover01 column">
                                <div>
                                    <figure><Image className='img-fluid service-div-img' src={Art}></Image></figure>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Container>
                <div className='service-div'>
                    <Row className='center flex-wrap-reverse'>
                        <Col lg={4} className='center-in-div'>
                            <div className="hover01 column">
                                <div>
                                    <figure><Image className='img-fluid service-div-img' src={Plan}></Image></figure>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className='padding-side'>
                            <h3><p className='service-heading'><b>Metal Developing Plan</b></p></h3>
                            <hr className='custom-hr-75' />
                            <p className='service-body-text'>&emsp;&emsp;&emsp; We also provides CI, SG and etc... all type of metal developing plan Consulting Services.</p>
                            <p className='service-body-text'><FaArrowRight />&emsp; We helps our clients to build their business.</p>

                        </Col>

                    </Row>
                </div>
            </Container>




        </div>

    )
}

export default Services