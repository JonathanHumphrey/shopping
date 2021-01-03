import React from 'react'
import {AnimateOnChange} from 'react-animation'

export default function Header({setShow, show, cartItems}) {
    function toggleCart() {
        setShow(!show)
    }

    return (
        <div className='items'>
            
            <div className='header'>
                <h1 >shopping</h1>
                <AnimateOnChange>
                    <span className='cart-button' onClick={toggleCart}>&#9776; Open Cart({cartItems.length})</span>
                </AnimateOnChange>
            </div>
        </div>
    )
}
