import React, { Component } from 'react';
import Logo from '../Logo/Logo.jsx';

class Menu extends Component {
    render() {
        return (
            <div className='menu w-100'>
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
                        <span className='art-fg-blue tl-6'>
                            surname
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Menu;