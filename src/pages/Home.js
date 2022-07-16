import React, { useRef } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import PageHeading from '../components/General/PageHeading';
import ServiceCard from '../components/General/ServiceCard';
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import GalaryDiv from '../components/General/GalaryDiv';
import down from './Image/Scroll_Down_Arrow.png'
// import img1 from './Image/img1.png';
// import img2 from './Image/img2.png';
// import img4 from './Image/img4.png';

import Pattern from '../pages/Image/all-type-pattern.jpeg'
import Jig from '../pages/Image/Jig-Fixture.jpeg'
import Art from '../pages/Image/Art-wooden-work.jpeg'

import img1 from '../pages/Image/Machine-1.jpeg'
import img2 from '../pages/Image/Wooden_Work.jpeg'
import img3 from '../pages/Image/Pattern4.jpeg'




const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function Home() {

    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    return (
        <>
            {/* Part - 1 */}
            <div className='home-bg mt-5 pt-5'>
                <Container>
                    <Row>
                        <Col className='pt-4 pb-4'>
                            <div className='home-welcome-heading'>
                                <p className='Text-Animation'>Welcome to Ashvi Engineers!</p>
                                <p className='home-sub-heading'>- Our service is your dream project.</p>
                            </div>
                            <div className='parent-scroll pt-5 pb-5'>
                                <Button className='btn-transparent' onClick={executeScroll} ><Image src={down} alt='Scroll_Down' /></Button>


                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>


            {/* Part-2 */}
            <div ref={myRef} className='mt-5 pt-5 pb-5'>
                <div className='mt-3 pt-1'>
                    <PageHeading PageTitle='Our Services' />
                </div>
                <Container>
                    <Row className='home-service-row'>
                        <ServiceCard
                            CardTitle='All type of Patterns'
                            ImgSrc={Pattern}
                            CardBody='We creates all type of patterns of Aluminium, Wooden (any size), Thermocol etc..'
                        />
                        <ServiceCard
                            CardTitle='Jig Fixture'
                            ImgSrc={Jig}
                            CardBody='We makes Jigs and Fixtures for CNC, VMC, Drill, Lathe Machine Tools etc...All type of machines tools.'
                        />
                        <ServiceCard
                            CardTitle='Art wooden works'
                            ImgSrc={Art}
                            CardBody='We provides wooden art work (carving, cutting based on design) on Archiect based as well as for personal work. '

                        />
                    </Row>
                    <Row>
                        <div className='more-btn-div'>
                            <Button className='custom-btn-more'>
                                <Link className='custom-btn-link' to='/services'>More  <BsArrowRight /></Link>
                            </Button>
                        </div>
                    </Row>
                </Container>


            </div>


            {/* Part - 3 */}
            <div className='home-services pt-5 pb-5'>
                <Container>
                    <div className='mt-3 pt-1'>
                        <PageHeading PageTitle='Our Work' />
                    </div>

                    <Row className='home-service-row'>
                        <GalaryDiv ImgSrc={img1} />
                        <GalaryDiv ImgSrc={img2} />
                        <GalaryDiv ImgSrc={img3} />
                        <div className='more-btn-div'>
                            <Button className='custom-btn-more'>
                                <Link className='custom-btn-link' to='/galary'>More  <BsArrowRight /></Link>
                            </Button>
                        </div>
                    </Row>
                </Container>
            </div>



        </>
    )
}

export default Home