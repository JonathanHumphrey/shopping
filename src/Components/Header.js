import React from 'react'
import {AnimateOnChange} from 'react-animation'

export default function Header({setShow, show, cartItems}) {
    function toggleCart() {
        setShow(!show)
    }

    return (
        <div className='header'>
            <h1>Variety Store</h1>
            <AnimateOnChange>
                <span className='cart-button' onClick={toggleCart}>&#9776; Cart({cartItems.length})</span>
            </AnimateOnChange>
        </div>
    )
}
