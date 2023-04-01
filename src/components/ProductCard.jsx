import React from 'react'
import sampleimg from "../static/flipmob.webp"
import style from "./style/ProductCard.module.css"
import { useEffect } from 'react'
export default function ProductCard(props) {
    const {title,discount,price,image} = props
    return (
        <div className={style["product-card"]}>
            <div className={style["discount-percentage"]}>{discount}% off</div>
            <img src={`http://127.0.0.1:8000/${image}`} alt="Product image" />
            <div className={style["product-details"]}>
                <div className={style["product-name"]}>{title}</div>
                <div className={style["product-price"]}>₹{price}</div>
                <button className={style["buy-now-btn"]}>Buy Now</button>
            </div>
        </div>

    )
}
