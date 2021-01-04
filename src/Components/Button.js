import React from 'react'


export default function Button(props) {
    const addToCart = () => {
        if (props.cartItems.indexOf(props.item) === -1) {
            props.item.isInCart = true;
            props.item.quantity += 1;
            props.setCartItems([...props.cartItems, props.item]);
        } else {
            props.item.quantity += 1;
            props.item.isInCart = true;
        }
    }
    //Populates the button and it's identifiers from the Data.js file by passing props in from the Body.js file
    return (
        <div className='itemObject'>
            <img className='productImg' src={props.img} alt="the product"/>
            <p className='name' >{props.name}</p>
            <p className='desc' >{props.desc}</p>
            <p className='price' >${props.price}</p>
            <button
                className='addToCart btn'
                id={props.id}
                onClick={addToCart}>
                Add To Cart</button>
        </div>
    )
}
