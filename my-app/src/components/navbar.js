import React from 'react';
import logo from '../image/logo.png'


export default function navbar(){
    return (
        <navbar>
             <img 
             src={logo}
             alt='logo.png'
             className='nav--icon'/>
            <h3 className ='nav--logo_text'>React Facts</h3>
            <h4 className='nav--title'>React course projrct</h4>
        </navbar>)
}