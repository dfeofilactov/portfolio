import React, { Component } from 'react';
import { IconButton, Icon } from '@material-ui/core';
import Card from '../Card/Card.jsx';

class Panel extends Component {
    render() {
        return (
            <div className='panel'>
                <div className='container-fluid'>
                    <div className='row justify-content-end'>
                    {/* Вынести в отдельный компонент */}
                        <div className='toolbar'>
                            <IconButton className='btn-rotate'>
                                <Icon>rotate_90_degrees_ccw</Icon>
                            </IconButton>
                        </div>
                    </div> 
                    <div className='row'>
                        <div className='cards'>
                            <div className='col'>
                                <Card/>
                            </div>
                            <div className='col'>
                                <Card plastic/>
                            </div>
                            <div className='col'>
                                <Card plastic/>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
        );
    }
}

export default Panel;