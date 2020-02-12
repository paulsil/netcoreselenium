import React from 'react';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import NavMenu from './nav/NavMenu';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

const Layout = props => (
    <Router>
        <Container fluid>
            <Row>
                <Col sm={3}>
                    <Router>
                        <NavMenu/>
                    </Router>
                </Col>
                <Col sm={9}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    </Router>
);

export default Layout;