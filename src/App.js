import React, { useState } from 'react'

import Header from './Components/Header'
import Body from './Components/Body'
import Checkout from './Components/Checkout'
import { items } from './Data/Data';
import {cart} from './Data/Data';
import './App.css';

function App() {

  //Slices up state for various functions throughout the Application
  const [inventory, setInventory] = useState(items);
  const [cartItems, setCartItems] = useState([])
  const [show, setShow] = useState(false)
  const [isInCart, toggleInCart] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [total, setTotal] = useState(0)

  return (
    <div className="App">
      <Header
        show={show}
        setShow={setShow}
        cartItems={cartItems}
      />
      <Checkout
        show={showModal}
        onHide={() => setShowModal(false)}
        total={total}
      />
      <Body
        inventory={inventory}
        setInventory={setInventory}
        setCartItems={setCartItems}
        cartItems={cartItems}
        show={show}
        setShow={setShow}
        isInCart={isInCart}
        toggleInCart={toggleInCart}
        showModal={showModal}
        setShowModal={setShowModal}
        total={total}
        setTotal={setTotal}
      />
    </div>
  );
}

export default App;
