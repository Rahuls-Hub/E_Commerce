import React from 'react'
import IndividualProduct from './IndividualProduct'

const Products = ({products,addToCart}) => {
  console.log(products);
  return products.map((individualProduct)=>(
    <IndividualProduct key = {individualProduct.ID} individualProduct={individualProduct}
    addToCart={addToCart}
    />
))

  
}

export default Products
