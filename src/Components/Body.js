import React from 'react'
import Button from './Button'
import {items, cart}  from '../Data/Data'
import Sidebar from './Sidebar'

export default function Body({setCartItems, cartItems, show, setShow, quantity, updateQuantity, isInCart, toggleInCart}) {
    
    //Function to handle adding items to cart
    //TODO: add quantity functionality and an animation when you add an item to the cart
    const addToCart = (item) => {
        if (item.isInCart === false && item.quantity === 0) {
            updateQuantity(item.quantity += 1)
            setCartItems([...cartItems, item])
            toggleInCart(!item.isInCart)
            cart.push(item)
        }
        else {
            updateQuantity(item.quantity += 1)
            setCartItems([...cartItems])
        }
        
    }
    // Populates the page with the sidebar/cart fucntionality and the buttons and item descriptions from the Data.js file
    return (
        <div className="body">
            {show ?
                <Sidebar
                    setCartItems={setCartItems}
                    cartItems={cartItems}
                    setShow={setShow}
                    show={show}
                    quantity={quantity}
                    updateQuantity={updateQuantity}
                />
            : null}
            <div className="item-selection">
                {items.map((item, i) => {
                    return (
                        <Button
                            key={i}
                            id={item.id}
                            item={item}
                            name={item.name}
                            desc={item.desc}
                            price={item.price}
                            addToCart={addToCart}
                        />
                    )
                })}
            </div>
        </div>
    )
}
