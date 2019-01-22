import React, { Component } from 'react';
import { IconButton, Icon } from '@material-ui/core';

class Card extends Component {
    render() {
        const { material } = this.props;
        return (
            <div className={ 'card art-fg-dark ' + material || '' }>
                <p>{ material || '' } card</p>
            </div>
        );
    }
}

export default Card;