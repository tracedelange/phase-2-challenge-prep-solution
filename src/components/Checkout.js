import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Checkout = ({handleCartSubmit, currentCart, totalPrice}) => {

    let cartItemsArray = currentCart.map((item) => (<li key={item.id} >{item.name}</li>))

    const [postFinished, setPostFinished] = useState(false)

    const handleSubmitCart = (totalPrice) => {

        // let itemsArray = currentCart.map((item) => item.name)

        const cartObject = {
            items: currentCart,
            total: totalPrice
        }

        const configurationObject = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(cartObject)
          };
          
          fetch("http://localhost:3001/carts", configurationObject)
          .then(response => response.json())
          .then(() => {
            
            handleCartSubmit()
            setPostFinished(true)
        })

    }

    return (
        <div>
            <h2>Check Out</h2>
            <button onClick={()=>(handleSubmitCart(totalPrice))}>Submit Cart</button>
            <ul>
                {cartItemsArray}
            </ul>
            {postFinished ? <Redirect to={'/'} /> : null}

        </div>
    )
}

export default Checkout
