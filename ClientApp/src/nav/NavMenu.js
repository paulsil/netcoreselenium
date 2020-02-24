import React from 'react';
import { Nav } from 'react-bootstrap';
import './NavMenu.css';
import { connect } from 'react-redux';
import NavMenuItem from './NavMenuItem'
//<button onClick={(e) => history.push('/join')}>straight to join via history push</button>

const NavMenu = (props) => (

    <Nav variant="pills" activeKey={props.pathname} className="flex-column">

        <NavMenuItem currentPath={props.pathname} linkPath='/' title='Home' />
        <NavMenuItem currentPath={props.pathname} linkPath='/chat' title='ChatProper' />
        <NavMenuItem currentPath={props.pathname} linkPath='/join' title='Join' />
        <NavMenuItem currentPath={props.pathname} linkPath='/history' title='History' />

        <Nav.Link eventKey="disabled" disabled>
            Disabled
            </Nav.Link>
    </Nav>
);

const mapStateToProps = state => state.navigation;
//const mapStateToProps = state => state.routing.location;

export default connect(mapStateToProps)(NavMenu);