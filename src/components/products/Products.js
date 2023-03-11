import React from 'react'
import Product from './Product'

const Products = ({ data }) => {

  return (
    <>
      <div className='d-flex  img_wrapper container-fluid p-3'>
        {data.map((item, id) => {
          return <Product item={item} />
        })}
      </div>
      <div className='load_btnbox'>
        <button className='btn_more'>Load More</button>
      </div>
    </>
  )
}

export default Products
