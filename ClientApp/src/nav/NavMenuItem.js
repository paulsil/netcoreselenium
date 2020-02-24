import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavMenuItem = (props) => (

    <Nav.Link eventKey={props.linkPath} disabled={props.currentPath === props.linkPath}>
        <LinkContainer to={props.linkPath} exact>
            <NavItem>
                {props.title}
             </NavItem>
        </LinkContainer>
    </Nav.Link>
);

export default NavMenuItem