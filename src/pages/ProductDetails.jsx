import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from "./Style/Product.module.css"
import { getProductById } from '../store/slice/product/productSlice'
import { useSelector,useDispatch } from 'react-redux'
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView'
export default function ProductDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector(state => state.product.product)
  useEffect(()=> {
    dispatch(getProductById(id))
  },[])
  return (
    <>
      <div className={style["product-container"]}>
        <div className={style["left"]}>
          <img src={product?.product_img} alt=""/>
            {/* <a href="/mycart/addToCart/{{product.id}}" style="width:20rem; height:3rem; margin-left:80px; font-size:1.2rem; font-weight:bolder; margin-top:20px" className={style["btn btn-danger"]}>Add to cart</a> */}
        </div>
        <div className={style["right"]}>
          <h6 id={style["product-title"]}>{product?.title}</h6>

          <div className={style["price-container"]}>
            <h4 id={style["price-title"]}>₹{product?.getFinalPrice?.toLocaleString('en-In')}</h4>
            <p id={style["original-price-title"]}><del>₹{product?.price?.toLocaleString('en-In')}</del></p>
            <p id={style["discount-price-para"]}>{product?.discount}% off</p>
          </div>

          <div className={style["description-container"]}>
            <p>{product?.description}</p>
          </div>
          <div className={style["content-container"]}>
            <FroalaEditorView model={product?.content} />
          </div>
        </div>
      </div>
    </>
  )
}
