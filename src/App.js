import React, {useState} from 'react'

import Header from './Components/Header'
import Body from './Components/Body'
import './App.css';

function App() {
  
  //Slices up state for various functions throughout the code
  const [cartItems, setCartItems] = useState([])
  const [show, setShow] = useState(false)
  const [quantity, updateQuantity] = useState(0)
  const [isInCart, toggleInCart] = useState(false)
  
  
  return (
    <div className="App">
      <Header 
        show={show} 
        setShow={setShow} 
        cartItems={cartItems}
      />
      <Body 
        setCartItems={setCartItems} 
        cartItems={cartItems} 
        show={show} 
        setShow={setShow}
        quantity={quantity}
        updateQuantity={updateQuantity}
        isInCart={isInCart}
        toggleInCart={toggleInCart}
      />
    </div>
  );  
}

export default App;
