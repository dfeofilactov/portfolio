import React, { Component } from 'react';
import Logo from '../Logo/Logo.jsx';

class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <div className='logo flex-center'>
                    <p>
                        Company
                    </p>
                </div>
                <div className='head flex-center'>
                    <Logo />
                </div>
                <div className='controls flex-center'>
                    <p className='tl-4'>
                        name.
                        <span className='art-fg-blue tl-5'>
                            surname
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Menu;