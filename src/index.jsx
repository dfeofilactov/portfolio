import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


import NCanvas from './canvas';
import Animations from './animejs/animations';
import './sass/main.sass';
import Menu from './components/Menu/Menu.jsx';
import Panel from './components/Panel/Panel.jsx';
import About from './components/About';
import Bar from './components/Bar';
import History from './components/History';
import mainReducer from './redux/reducer/reducer';

import styles from './css/buttons.css';

class App extends Component {
    render() {
        const store = createStore(mainReducer);
        return (
            <Router history={ History }>
                <Provider store={ store }>
                    <div>
                        {/* <header className='container-fluid px-5'><Menu /></header> */}
                        <Route exact path='/' component={ () => (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                <Button variant='contained' color='primary' onClick={ () => History.push('/about', {}) }>About</Button>
                                <Button variant='contained' color='primary' onClick={ () => History.push('/bar', {}) }>Bar</Button>
                            </div>
                        ) } />
                        <Route path='/about' component={ About } />
                        <Route path='/bar' component={ Bar } />
                    </div>
                </Provider>
            </Router>
        );
    }
}

const app = document.getElementById('root');
app ? ReactDOM.render(<App />, app) : false;

//NCanvas.Init();
Animations.Start();
