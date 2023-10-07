import React from 'react';
import logo from '../image/logo.png'

export default function navbar(){
    return (
        <navbar>
             <img 
             src={logo}
             alt='logo.png'
             className='nav--icon'/>
            <h3>React</h3>
            <h4>React course projrct</h4>
        </navbar>)
}