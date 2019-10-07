import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/BrowserTest';

class BrowserTest extends Component {

    constructor(props) {
        // Required step: always call the parent class' constructor
        super(props);

        // Set the state directly. Use props if necessary.
        this.state = {
            updateInProgress: props.updateInProgress,
            running: props.running
        };
    }

    setUser = (e) => {
        this.setState({ user: e.target.value });
    }

    shouldComponentUpdate(nextProps) {

        return this.props.updateInProgress !== nextProps.updateInProgress||
            this.props.running !== nextProps.running;
            
    }

    render () {
        return (
            <div className="container" >
                <div className="row">&nbsp;</div>
                <div className="row">
                    <div className="col-6">&nbsp;</div>
                    <div className="col-6">
                        <button onClick={() => { this.props.getState() }}>Get State</button>
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
                        <li>{this.props.updateInProgress.toString()}</li>
                        <li>{this.props.running.toString()}</li>
                    </div>
                </div>
            </div>
        );
    }
}
  

export default connect(
  state => state.browserTest,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(BrowserTest);

