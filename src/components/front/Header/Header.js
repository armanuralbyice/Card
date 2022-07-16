import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'

const Header = ({cart}) => {
    return (
        <header className='header'>
            <div>
                <h1>
                    <Link to='/' className='logo'>Shop</Link>
                </h1>
            </div>
            <div className='header-link'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/signup'>signup</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/cart' >
                           cart
                            <span className='cart-length'>{cart.length===0?"":cart.length}</span>
                        </Link>

                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;