import React from 'react'
import ProductCarousel from './ProductCarousel'
export default function ProductListContainer({title,products}) {
  return (
    <div style={{width:"100%",height:"auto",marginTop:"40px",padding:'17px',marginLeft:"10px",marginRight:'10px',background:"white"}}>
        <h4>{title}</h4>
        <ProductCarousel products={products}/>
      </div>
  )
}
