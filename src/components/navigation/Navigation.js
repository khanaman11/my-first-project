import React from 'react'
import { Link } from 'react-router-dom';
import "./Navigation.css"
function Navigation() {
    return (
        <div className='container-fluid py-4 px-4 align-item-center'>
            <div className='nav_wrapper'>
                <div className='left_nav'>
                    <div className='img_box'>
                        <img src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75' width="160px" alt='logo'/>
                    </div>
                    <div className='select_wrapper'>
                        <span className='icon_box'>@</span>
                        <select className='select_box'>
                            <option>Grocery</option>
                            <option>Bakery</option>
                            <option>Makeup</option>
                            <option>Bags</option>
                            <option>Clothing</option>
                            <option>Furniture</option>
                            <option>Daliy Need</option>
                            <option>Books</option>
                        </select>
                    </div>
                </div>
                <div className='right_nav'>
                    <div>
                        <Link to="#" className='nav_link'>Shops</Link>
                        <Link to="#" className='nav_link'>Offers</Link>
                        <Link to="#" className='nav_link'>FQA</Link>
                        <Link to="#" className='nav_link'>Contant</Link>
                        <Link to="#" className='btnt'>Became a Seller</Link>
                        <Link to="#" className="btnt">Join</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
