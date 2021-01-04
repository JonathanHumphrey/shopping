import React, { useState, useEffect } from 'react'


export default function Cart({ setCartItems, cartItems, toggleCheckout, showModal, setShowModal}) {
    // Sets up state to keep track of the subtotal of the items added into the cart
    let [total, setTotal] = useState(0)

    // Sets up an array and the total in order to map through cart items and gather the data and then push those values into the itemPrices array
    const getTotalPrice = () => {
        let itemPrices = [];
        let totals;
        cartItems.map(item => {
            totals = item.price * item.quantity
            itemPrices.push(totals)
        })
        let result = itemPrices.length > 0 ? itemPrices.reduce((a, b) => {
            return a + b
        }) : 0
        setTotal(result)

    }
    // only calculates the total when cart items is updated
    useEffect(() => {
        getTotalPrice()
        console.log(total)
    }, [cartItems])

    const clearCart = () => {
        setCartItems([])
        
        setTotal(0)
    }

    // TODO
    const delItem = () => {
        console.log(cartItems)
    }
    // TODO
    
    return (
        <div className="cart">
            {//maps through the cart items and displays them in the cart as they are added
                cartItems.map((item, i) => {
                    return (
                        <div className="cartItem">
                            <p className='itemName'>{item.name}: </p>
                            <p className='itemPrice'>${item.price}</p>
                            <p className='cartQuantity'>x {item.quantity}</p>
                            <div className='delBtnDiv'>
                                <button id={i} className='delBtn' onClick={() => delItem()}>X</button>
                            </div>
                            <br />
                        </div>
                    )
                })}
            <div className="endOfCart">
                <p>Cart Total: ${total.toFixed(2)}</p>
                <button className="btn cartButton" onClick={clearCart}>Clear Cart</button>
                <button className="btn cartButton" onClick={() => setShowModal(true)}>Checkout</button>
            </div>
            
        </div>
    )
}
