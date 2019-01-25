import React, { Component } from 'react';
// import { IconButton, Icon, Button } from '@material-ui/core';
// import Card from '../Card/Card.jsx';
// import { PLAY_CANVAS, OPEN } from '../../redux/actions/actions';
import Panel from '../Panel/Panel.jsx';
import WelcomePanel from './Welcome';
import InfoPanel from './Info';
import About from './About';

class Container extends Component {
    componentDidMount() {
        // this.props.dispatch(OPEN());
    }
    render() {
        return (
            <div>
                <Panel />
                <WelcomePanel />
                <InfoPanel />
                <About />
            </div>
        );
    }
}

// function select(store) {
//     return {};
// }

// export default connect(select)(Container);
export default Container;
