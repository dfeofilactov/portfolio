import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.sass';
import Menu from './components/Menu/Menu.jsx';
import Panel from './components/Panel/Panel.jsx';

class App extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'><Menu/></div>
                <div className='row'><Panel/></div>
            </div>
        );
    }
}

const app = document.getElementById('root');
app ? ReactDOM.render(<App />, app) : false;