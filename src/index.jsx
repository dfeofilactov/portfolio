import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NCanvas from './canvas';
import './sass/main.sass';
import Menu from './components/Menu/Menu.jsx';
import Panel from './components/Panel/Panel.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <header className='container-fluid px-5'><Menu/></header>
                <Panel/>
            </div>
        );
    }
}

const app = document.getElementById('root');
app ? ReactDOM.render(<App />, app) : false;

NCanvas.Init();
