import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class JoinForm extends Component {

    constructor(props) {
        // Required step: always call the parent class' constructor
        super(props);

        // Set the state directly. Use props if necessary.
        this.state = {
            name: ""
        };
    }

    setName = (e) => {
        this.setState({ name: e.target.value });
    }

    //shouldComponentUpdate(nextProps) {

    //    return this.props.user !== nextProps.user ||
    //        this.props.message !== nextProps.message;

    //}

    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}



