import React, { useContext } from 'react'
import './ItemDisplay.css'
import { StoreContext } from '../../context/StroreContext'
import Items from '../Items/Items'

const ItemDisplay = ({ category }) => {

    const { Item_list } = useContext(StoreContext)

    return (
        <div className='Item-display' id='Item-display'>
            <h2>Shop our popular products</h2>
            <div className="Item-display-list">
                {Item_list.map((item, index) => {
                    if (category === 'All' || category === item.category)
                        return <Items key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                })}
            </div>

        </div>
    )
}

export default ItemDisplay
