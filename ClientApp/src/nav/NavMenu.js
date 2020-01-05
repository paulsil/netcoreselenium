import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
//import { Glyphicon } from 'react-bootstrap/gly
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
    //<Navbar stacked>

        <Nav defaultActiveKey="/" className="flex-column">

            <Nav.Link>
                <LinkContainer to={'/'} exact>
                    <NavItem>
                        Home
                    </NavItem>
                </LinkContainer>
            </Nav.Link>
            <Nav.Link>
                <LinkContainer to={'/chat'}>
                    <NavItem>
                        ChatProper
                    </NavItem>
                </LinkContainer>
            </Nav.Link>
            <Nav.Link>
                <LinkContainer to={'/join'}>
                    <NavItem>
                        Join
                    </NavItem>
                </LinkContainer>
            </Nav.Link>
            <Nav.Link>
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

        //<Nav className="flex-column">
        //  <LinkContainer to={'/'} exact>
        //      <NavItem>
        //            Home
        //      </NavItem>
        //    </LinkContainer>
        //</Nav>
        //<Nav>
        //    <LinkContainer to={'/chat'}>
        //        <NavItem>
        //            Chat
        //        </NavItem>
        //    </LinkContainer>
        //</Nav>
    //</Navbar>
  //<Navbar inverse fixedTop fluid collapseOnSelect>
  //  <Navbar.Header>
  //    <Navbar.Brand>
  //      <Link to={'/'}>SeleniumMvc</Link>
  //    </Navbar.Brand>
  //    <Navbar.Toggle />
  //  </Navbar.Header>
  //  <Navbar.Collapse>
  //    <Nav>
  //      <LinkContainer to={'/'} exact>
  //        <NavItem>
  //          Home
  //        </NavItem>
  //      </LinkContainer>
  //      <LinkContainer to={'/chat'}>
  //        <NavItem>
  //          Chat
  //        </NavItem>
  //      </LinkContainer>
  //      <LinkContainer to={'/history'}>
  //        <NavItem>
  //           History
  //        </NavItem>
  //      </LinkContainer>
  //     </Nav>
  //  </Navbar.Collapse>
  //</Navbar>
);
