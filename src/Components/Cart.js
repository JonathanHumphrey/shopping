import React, { useState, useEffect } from 'react'
import {cart} from '../Data/Data'

export default function Cart({setCartItems, cartItems, quantity, updateQuantity}) {
    // Sets up state to keep track of the subtotal of the items added into the cart
    let [total, setTotal] = useState(0)
    
    // Calculates the total by mapping throught the cartItems and adds the item price iteratively
    // !!!!!!!!!!!!!!! BUG !!!!!!!!!!!!!!!!!!!
    // It doesn't add together all items added into the cart
    const calcTotal = () => {
        cart.map((i) => {
            
            setTotal(total = i.price * i.quantity)
        
        })
    }
    // only calculates the total when cart items is updated
    useEffect(() => {
        calcTotal()
    }, [cartItems])

    const clearCart = () => {
        setCartItems([...' '])
        updateQuantity(0)
        setTotal(0)
    }

    // TODO
    const delItem = (item, i) => {
        
    }
    // TODO
    const handleCheckout = () => {

    }
    return (
        <div className="cart">
            {//maps through the cart items and displays them in the cart as they are added
                cartItems.map((item, i) => {
                return (
                    <div className="cartItem">
                        <p className='p'>{item.name}: ${item.price}</p>
                        <p className='cartQuantity'>x {item.quantity}</p>
                        <div className='delBtnDiv'>
                            <button id={i} className='delBtn' onClick={() => delItem(item, i)}>X</button>
                        </div>
                        <br/>
                    </div>
                )
            })}
            <div className="endOfCart">
                <p>Cart Total: ${total.toFixed(2)}</p>
                <button onClick={clearCart}>Clear Cart</button>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    )
}
