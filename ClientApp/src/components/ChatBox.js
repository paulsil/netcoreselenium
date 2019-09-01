import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Chat';

class ChatBox extends Component {

    constructor(props) {
        // Required step: always call the parent class' constructor
        super(props);

        // Set the state directly. Use props if necessary.
        this.state = {
            user: "",
            message: ""
        };
    }

    setUser = (e) => {
        this.setState({ user: e.target.value });
    }
   
    setMessage = (e) => {
        this.setState({ message: e.target.value });
    }

    shouldComponentUpdate(nextProps) {

        return this.props.user !== nextProps.user ||
            this.props.message !== nextProps.message;
            
    }

    render () {
        return (
            <div className="container" >
                <div className="row">&nbsp;</div>
                <div className="row">
                    <div className="col-6">&nbsp;</div>
                    <div className="col-6">
                        User<input type="text" id="userInput" onChange={this.setUser} />
                        <br />
                        Message<input type="text" id="messageInput" onChange={this.setMessage} />
                        <button onClick={() => { this.props.send(this.state.user, this.state.message) }}>Send</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">&nbsp;</div>
                    <div className="col-6">
                        <ul id="messagesList"></ul>
                        <li>{this.props.user}</li>
                        <li>{this.props.message}</li>
                    </div>
                </div>
            </div>
        );
    }
}
  

export default connect(
  state => state.chat,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(ChatBox);

