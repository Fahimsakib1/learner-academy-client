import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            {/* <Container>
                <Row>
                    <Col lg="3" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col lg="9">
                        <Outlet></Outlet>
                    </Col>

                </Row>
            </Container> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;