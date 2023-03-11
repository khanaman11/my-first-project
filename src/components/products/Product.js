import React from 'react'
import "./Products.css"

const Product = ({ item }) => {
    return (
        <div className='cart_box'>
            <div>
                <img src={item.image} alt='Logo'  className="imgp" height="208px"/>
            </div>
            <div className='p-4'>
                <span>{item.price}</span>
                <p className='discription'>{item.discription}</p>
            </div>
            <button className='counter_btn'>+</button>
        </div>
    )
}

export default Product
