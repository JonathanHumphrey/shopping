import React from 'react'
import Button from './Button'
import Sidebar from './Sidebar'

export default function Body({ setCartItems, cartItems, show, setShow, showModal, setShowModal, total, setTotal, quantity, updateQuantity, isInCart, toggleInCart, inventory, setInventory }) {
    // Populates the page with the sidebar/cart fucntionality and the buttons and item descriptions from the Data.js file
    return (
        <div className="body">
            {show ?
                <Sidebar
                    setCartItems={setCartItems}
                    cartItems={cartItems}
                    setShow={setShow}
                    show={show}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    total={total}
                    setTotal={setTotal}
                    isInCart={isInCart}
                    toggleInCart={toggleInCart}
                />
                : null}
            <div className="item-selection">
                {inventory?.map((item, i) => {
                    return (
                        <Button
                            key={i}
                            id={item.id}
                            item={item}
                            img={item.img}
                            name={item.name}
                            desc={item.desc}
                            price={item.price}
                            setCartItems={setCartItems}
                            cartItems={cartItems}
                        />
                    )
                })}
            </div>
        </div>
    )
}
