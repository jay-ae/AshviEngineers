import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import PageHeading from '../components/General/PageHeading';

import Pattern1 from '../pages/Image/all-type-pattern.jpeg'
import Pattern2 from './Image/Pattern.jpeg'
import Pattern3 from '../pages/Image/Pattern3.jpeg'
import Pattern4 from '../pages/Image/Pattern4.jpeg'
import Pattern5 from '../pages/Image/Pattern5.jpeg'
import Pattern6 from '../pages/Image/Pattern6.jpeg'
import Pattern7 from '../pages/Image/Pattern7.jpeg'
import Pattern8 from '../pages/Image/Pattern8.jpeg'
import Pattern9 from '../pages/Image/Pattern9.jpeg'
import Pattern10 from '../pages/Image/Pattern10.jpeg'
import Pattern11 from '../pages/Image/Pattern11.jpeg'
import Pattern12 from '../pages/Image/Pattern12.jpeg'
import Pattern13 from '../pages/Image/Pattern13.jpeg'
import Pattern14 from '../pages/Image/Pattern14.jpeg'

import Thermocol1 from '../pages/Image/Thermocol-1.jpeg'
import Thermocol2 from '../pages/Image/Thermocol-2.jpeg'
import Machine from '../pages/Image/Machine.jpeg'

import wooden1 from './Image/Wooden_Work.jpeg'
import wooden2 from '../pages/Image/Art-wooden-work.jpeg'
import Jig from '../pages/Image/Jig-Fixture.jpeg'
import Plan from '../pages/Image/Metal-development-plan.jpeg'



function Galary() {
    return (

        <div className='mt-5 galarypage-div'>
            <PageHeading PageTitle='Galary' />

            <Container className='mt-5'>
                <Row>
                    {/* Col 1 */}
                    <Col lg={4} md={12} className="mb-4 mb-lg-0">
                        <Image
                            src={Pattern1}
                            className="w-100 img-shadow rounded mb-2"
                        />

                        <hr />
                        <Image
                            src={Thermocol1}
                            className="w-100 img-shadow rounded mb-2"
                        />
                        <hr />
                        <Image
                            src={Thermocol2}
                            className="w-100 img-shadow rounded mb-2"
                        />
                        <hr />
                        <Image
                            src={Pattern7}
                            className="w-100 img-shadow rounded mb-2"
                        />
                        <hr />
                        <Image
                            src={Pattern6}
                            className="w-100 img-shadow rounded mb-2 mt-2"
                        />

                        <hr />
                        <Image
                            src={Pattern13}
                            className="w-100 img-shadow rounded mb-2 mt-2"
                        />
                        <hr />

                        <Image
                            src={Pattern10}
                            className="w-100 img-shadow rounded mb-2 mt-2"
                        />
                    </Col>



                    {/* Col 2 */}
                    <Col lg={4} className="mb-4 mb-lg-0">
                        <Image
                            src={Pattern2}
                            className="w-100 img-shadow rounded mb-2"
                        />
                        <hr />
                        <Image
                            src={Jig}
                            className="w-100 img-shadow rounded mb-2 mt-2"
                        />
                        <hr />
                        <Image
                            src={Pattern3}
                            className="w-100 img-shadow rounded mb-2 mt-2"
                        />
                        <hr />
                        <Image
                            src={Pattern4}
                            className="w-100 img-shadow rounded mb-2 mt-2"
                        />
                        <hr />
                        <Image
                            src={Pattern5}
                            className="w-100 img-shadow rounded mb-2 mt-2"
                        />
                        <hr />
                        <Image
                            src={Pattern9}
                            className="w-100 img-shadow rounded mb-2 mt-2"
                        />
                        <hr />

                        <Image
                            src={Pattern8}
                            className="w-100 img-shadow rounded mb-2 mt-2"
                        />
                        <hr />

                        <Image
                            src={Pattern12}
                            className="w-100 img-shadow rounded mb-2 mt-2"
                        />
                    </Col>


                    {/* Col 3 */}
                    <Col lg={4} className="mb-4 mb-lg-0">

                        <Image
                            src={Machine}
                            className="w-100 img-shadow rounded mb-2"
                        />
                        <hr />
                        <Image
                            src={wooden2}
                            className="w-100 img-shadow rounded mb-2 mt-2"
                        />
                        <hr />
                        <Image
                            src={wooden1}
                            className="w-100 img-shadow rounded mb-2 mt-2"
                        />

                        <hr />
                        <Image
                            src={Pattern11}
                            className="w-100 img-shadow rounded mb-2 mt-2"
                        />


                        <hr />
                        <Image
                            src={Pattern14}
                            className="w-100 img-shadow rounded mb-2"
                        />
                        <hr />
                        <Image
                            src={Plan}
                            className="w-100 img-shadow rounded mb-2"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Galary