import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class About extends Component {
    render() {
        // const { test } = this.props;
        return (
            <div className='page'>About</div>
        );
    }
}

// About.propTypes = {
//     test: PropTypes.string.isRequired,
//     blocked: PropTypes.bool.isRequired,
// };

function select(store) {
    const state = store.viewReducer;
    return { test: state.test, blocked: state.blocked };
}

export default connect(select)(About);
