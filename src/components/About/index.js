import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { Button } from '@material-ui/core';

import { OPEN, RESET_APP } from '../../redux/actions/actions';

class About extends Component {
    render() {
        const { test } = this.props;
        return (
            <div className='flex-center center'>
                <p>About</p>
                <Button
                    variant="contained"
                    color='default'
                    disabled= { this.props.blocked }
                    onClick={ () => {
                        this.props.dispatch(RESET_APP());
                    } }
                >
                    { test }
                </Button>
                <Button
                    variant="contained"
                    color='primary'
                    onClick={ () => {
                        this.props.dispatch(OPEN({ name: 'button' }));
                    } }
                >
                    Unblock Reset
                </Button>
                <Route path='/about/test' component={() => (
                    <div>Reset Done!</div>
                )} />
            </div>
        );
    }
}

About.propTypes = {
    test: PropTypes.string.isRequired,
    blocked: PropTypes.bool.isRequired,
};

function select(store) {
    const state = store.viewReducer;
    return { test: state.test, blocked: state.blocked };
}

export default connect(select)(About);
