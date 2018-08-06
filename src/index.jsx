import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import NCanvas from './canvas';
import './sass/main.sass';
import Menu from './components/Menu/Menu.jsx';
import Panel from './components/Panel/Panel.jsx';

class App extends Component {
    render() {
        //const store = createStore(reducer);
        return (
           // <Provider store={ store }>
                <div>
                    <header className='container-fluid px-5'><Menu/></header>
                    <Panel/>
                </div>
            //</Provider>
        );
    }
}

const app = document.getElementById('root');
app ? ReactDOM.render(<App />, app) : false;

NCanvas.Init();
