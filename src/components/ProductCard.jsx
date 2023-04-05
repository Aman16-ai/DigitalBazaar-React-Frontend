import React from 'react'
import sampleimg from "../static/flipmob.webp"
import style from "./style/ProductCard.module.css"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trunchatesChar } from '../utility/stringFromatter'
export default function ProductCard(props) {
    const {product_id,title,discount,price,image} = props
    return (
        <div className={style["product-card"]}>
            <div className={style["discount-percentage"]}>{discount}% off</div>
            <img src={`${image}`} alt="Product image" />
            <div className={style["product-details"]}>
                <div className={style["product-name"]}>{trunchatesChar(title,50)}</div>
                <div className={style["product-price"]}>₹{price}</div>
                <Link style={{textDecoration:'none'}} to={`/product/${product_id}`}><button className={style["buy-now-btn"]}>Buy Now</button></Link>
            </div>
        </div>

    )
}
