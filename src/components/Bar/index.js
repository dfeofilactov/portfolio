import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { Button } from '@material-ui/core';
import { SAVE, RESTORE } from './../../redux/actions/actions';

class Bar extends Component {
    render() {
        return (
            <div className='flex-center center'>
                <p>Bar</p>
                <p style={ { fontSize: '15px' } }>Store:</p>
                <p style={ { marginTop: '20px', fontSize: '20px', fontFamily: 'Consolas' } }>{ JSON.stringify(this.props.store) }</p>

                <div style={ { margin: '20px', display: 'flex' } }>
                    <div style={ { margin: 5 } } >
                        <Button
                            variant='contained'
                            onClick={ () => {
                                this.props.dispatch(SAVE(this.props.store));
                            } }
                        >
                            Save
                        </Button>
                    </div>
                    <div style={ { margin: 5 } } >
                        <Button
                            color='primary'
                            variant='contained'
                            onClick={ () => {
                                this.props.dispatch(RESTORE(0));
                            } }
                        >
                            Restore
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

Bar.propTypes = {
    //
    store: PropTypes.object.isRequired,
};

function select(store) {
    return { store };
}

export default connect(select)(Bar);
