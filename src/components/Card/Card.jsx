import React, { Component } from 'react';
import { IconButton, Icon } from '@material-ui/core';

class Card extends Component {
    render() {
        const { plastic } = this.props;
        console.log(plastic);
        return (
            <div className={ plastic ? 'card plastic art-fg-dark' : 'card art-fg-dark' }>
                <p>{ plastic ? 'Plastic' : '' } Card</p>            
            </div>
        );
    }
}

export default Card;