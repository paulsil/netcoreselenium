import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter, useHistory, useLocation } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
//import { Glyphicon } from 'react-bootstrap/gly
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import { connect } from 'react-redux';

//<button onClick={(e) => history.push('/join')}>straight to join via history push</button>

const NavMenu = (props) => (

    <Nav variant="pills" activeKey={props.pathname} className="flex-column">

        <h4>the location is {props.pathname}</h4>

        <Nav.Link eventKey="/" disabled={props.pathname === "/"}>
            <LinkContainer to={'/'} exact>
                <NavItem>
                    Home
                    </NavItem>
            </LinkContainer>
        </Nav.Link>
        <Nav.Link eventKey="/chat" disabled={props.pathname === "/chat"}>
            <LinkContainer to={'/chat'}>
                <NavItem>
                    ChatProper
                    </NavItem>
            </LinkContainer>
        </Nav.Link>
        <Nav.Link eventKey="/join" disabled={props.pathname === "/join"}>
            <LinkContainer to={'/join'}>
                <NavItem>
                    Join
                    </NavItem>
            </LinkContainer>
        </Nav.Link>
        <Nav.Link eventKey="/history" disabled={props.pathname === "/history"}>
            <LinkContainer to={'/history'}>
                <NavItem>
                    History
                        </NavItem>
            </LinkContainer>
        </Nav.Link>

        <Nav.Link eventKey="disabled" disabled>
            Disabled
            </Nav.Link>
    </Nav>
);

const mapStateToProps = state => state.routing.location;
//const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps)(NavMenu);