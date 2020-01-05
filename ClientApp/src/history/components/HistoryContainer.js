import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../HistoryActions'

const HistoryContainer = props => (
    <div>
        <h1>History container {props.page}</h1>
    </div>
);

const mapStateToProps = state => state.history;
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HistoryContainer);