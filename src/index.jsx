import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './sass/main.sass';
import Menu from './components/Menu/Menu.jsx';
// import Panel from './components/Panel/Panel.jsx';
import reducer from './redux/reducer/reducer';
import Container from './components/Container/Container';

class App extends Component {
    render() {
        const store = createStore(reducer);
        return (
            <Provider store={ store }>
                <div>
                    <header className='container-fluid px-5'><Menu /></header>
                    {/* <Panel /> */}
                    <Container />
                </div>
            </Provider>
        );
    }
}

const app = document.getElementById('root');
ReactDOM.render(<App />, app);
