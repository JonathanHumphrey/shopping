import React from 'react'


export default function Button(props) {
    //Populates the button and it's identifiers from the Data.js file by passing props in from the Body.js file
    return (
        <div className='itemObject'>
            <p>{props.name}</p>
            <p>{props.desc}</p>
            <p>{props.price}</p>
            <button
                className='addToCart'
                id={props.id}
                onClick={() => props.addToCart(props.item)}>
                Add To Cart</button> 
        </div>
    )
}
