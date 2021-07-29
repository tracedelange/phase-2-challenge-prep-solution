import React from 'react'

const ItemCard = ({data, handleButtonClick, text}) => {
    return (
        <div>
            <li>
                <p>{data.name}, ${data.price}</p> <button onClick={() => (handleButtonClick(data))}>{text}</button>
            </li>
        </div>
    )
}

export default ItemCard
