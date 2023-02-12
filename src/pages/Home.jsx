import React, { useEffect, useState } from 'react'
import CategoryCard from '../components/CategoryCard'
import style from "./Style/Home.module.css"
import { fetchAllCategroies, getAllProducts } from '../services/productService'
import { getUser } from '../services/authService'
export default function Home() {
  const [categories,setCategories] = useState([])
  useEffect(()=> {
    (async function() {
      const result = await fetchAllCategroies()
      console.log(result)
      if(result.success === true) {
        setCategories(result.categories)
      }
    })()
  },[])
  return (
    <div>
      <div className={style["categories-container"]}>
        {categories.map((category)=> {
          return <CategoryCard name={category.name} img={category.img} />
        })}
      </div>
    </div>
  )
}
