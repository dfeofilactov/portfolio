import React, { Component } from 'react';
import { IconButton, Icon } from '@material-ui/core';
import Card from '../Card/Card.jsx';

class Panel extends Component {
    render() {
        return (
            <div className='panel'>
                <div className='container-fluid px-0'>
                    <div className='row justify-content-end m-0'>
                    {/* Вынести в отдельный компонент */}
                        <div className='toolbar'>
                            {/* <IconButton className='btn-rotate'>
                                <Icon>rotate_90_degrees_ccw</Icon>
                            </IconButton> */}
                        </div>
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
                        <div id='canvas-container'></div>
                    </div>               
                </div>
            </div>
        );
    }
}

export default Panel;