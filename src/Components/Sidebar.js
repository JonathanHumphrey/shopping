import React from 'react'
import Cart from './Cart'

export default function Sidebar({cartItems, setCartItems, show, setShow, quantity, updateQuantity}) {
    function toggleCart() {
        setShow(!show)
    }
    
    return (
        <div>
            <div className="sidebar">
                <button className='closeBtn' onClick={toggleCart}>&times;</button>
                <h1>Your Cart: </h1>
                <Cart cartItems={cartItems} setCartItems={setCartItems} quantity={quantity} updateQuantity={updateQuantity}/>
            </div>
        </div>
    )
}
