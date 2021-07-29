import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard';


const Items = ({currentCart, handleButtonClick}) => {

    const [items, setItems] = useState([])

    useEffect(()=> {

        fetch('http://localhost:3001/items')
        .then((response) => response.json())
        .then((data) => setItems(data))


    }, [])

    const itemArray = items.map((item) => <ItemCard data={item} key={item.id} handleButtonClick={handleButtonClick} text={currentCart.includes(item) ? 'Remove From Cart' : 'Add to Cart'} />)

    return (
        <div>
            <ul>
                {itemArray}
            </ul>
        </div>
    )
}

export default Items
