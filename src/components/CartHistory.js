import React, { useState, useEffect } from 'react'

const CartHistory = () => {

    const [history, setHistory] = useState([])

    useEffect(() => {

        fetch('http://localhost:3001/carts')
        .then((response) => response.json())
        .then((data) => setHistory(data))

    }, [])

    console.log(history)

    let cartsArray = history.map((cart) => (

        <li key={cart.id}>Number of products purchased: {cart.items.length}, Total Cost of Cart: {cart.total}</li>

    ))

    return (
        <div>
            <ul>
                {cartsArray}
            </ul>
        </div>
    )
}

export default CartHistory
