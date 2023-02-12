import React from 'react'
import style from "./style/CategoryCard.module.css"
import mobileIcon from "../static/flipmob.webp"
import { Link } from 'react-router-dom'
import { SERVER_URL } from '../config'
export default function CategoryCard(props) {
  const {name,img} = props
  return (
    <div className={style['info']}>
        <img src={SERVER_URL+img}/>
        <Link style={{color:"black",textDecoration:'none'}}>{name}</Link>
    </div>
  )
}
