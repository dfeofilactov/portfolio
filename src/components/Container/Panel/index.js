import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
    // PLAY_CANVAS,
    OPEN,
} from '../../../redux/actions/actions';

class Panel extends Component {
    componentDidMount() {
        this.props.dispatch(OPEN());
    }
    render() {
        return (
            <div className='panel'>
                <div className='container-fluid px-0'>
                    <div className='main-lbl px-5'>
                        {/* <p>
                            <div className='welcome-p'>Welcome</div>
                            <div className='where-p'>to my portfolio</div>
                        </p> */}
                    </div>
                    <div className='row justify-content-between m-0'>
                        {/* <div className='col m-4'>
                            <Card/>
                        </div>
                        <div className='col m-4'>
                            <Card material='plastic'/>
                        </div>
                        <div className='col m-4'>
                            <Card material='glass'/>
                        </div> */}
                        <div
                            id='canvas-container'
                            role='presentation'
                            onKeyDown={ () => { } }
                            onClick={ () => {
                                console.log('click');
                                // this.props.dispatch(PLAY_CANVAS());
                            } }
                        />
                    </div>
                    <div className='row justify-content-end m-0'>
                        {/* Вынести в отдельный компонент */}
                        {/* <div className='toolbar px-5'>
                            <IconButton className='btn-rotate'>
                                <Icon>fingerprint</Icon>
                            </IconButton>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

Panel.propTypes = { dispatch: PropTypes.func.isRequired };

function select() {
    return {};
}

export default connect(select)(Panel);
// export default Panel;
