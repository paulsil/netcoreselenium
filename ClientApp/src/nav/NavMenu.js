import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
//import { Glyphicon } from 'react-bootstrap/gly
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

const NavMenu = props => (
    //<Navbar stacked>


    <Nav variant="pills" activeKey={props.location.pathname} className="flex-column">

        <Nav.Link eventKey="/" disabled={props.location.pathname === "/"}>
            <LinkContainer to={'/'} exact>
                <NavItem>
                    Home
                    </NavItem>
            </LinkContainer>
        </Nav.Link>
        <Nav.Link eventKey="/chat" disabled={props.location.pathname === "/chat"}>
            <LinkContainer to={'/chat'}>
                <NavItem>
                    ChatProper
                    </NavItem>
            </LinkContainer>
        </Nav.Link>
        <Nav.Link eventKey="/join" disabled={props.location.pathname === "/join"}>
            <LinkContainer to={'/join'}>
                <NavItem>
                    Join
                    </NavItem>
            </LinkContainer>
        </Nav.Link>
        <Nav.Link eventKey="/history" disabled={props.location.pathname === "/history"}>
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

export default withRouter(NavMenu)
