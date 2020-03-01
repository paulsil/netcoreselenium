import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { actionCreators } from '../UserActions';
import { JoinForm } from './JoinForm';

const UserContainer = props => (
    <Container>
        <Row>
            <Col>
                <JoinForm logIn={props.logIn} />
            </Col>
        </Row>
        {
            /*
            <Row>
                <Col sm={4}><h2>{props.user}</h2></Col>
                <Col sm={8}

                    <Card bg="light" style={{ width: '18rem', marginRight: '100px' }}>
                        <Card.Header>{props.user}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                            of the card's content.{props.message}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
             </Row >
            */
        }

    </Container>
);

const mapStateToProps = state => state.chat;

function mapDispatchToProps(dispatch) {
    return { logIn: bindActionCreators(actionCreators.logIn, dispatch) }
}

//const mapDispatchToProps = dispatch => { join: bindActionCreators(actionCreators.join, dispatch) };

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);