import React, { useEffect, useState } from 'react'
import CategoryCard from '../components/CategoryCard'
import style from "./Style/Home.module.css"
import { fetchAllCategroies, getAllProducts } from '../services/productService'
import { getUser } from '../services/authService'
import MainCarousel from '../components/MainCarousel'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategroiesThunk } from '../store/slice/categorySlice'
import { getAllProductsThunk, getMensWearProductsThunk } from '../store/slice/productSlice'
import ProductCard from '../components/ProductCard'
import ProductCarousel from '../components/ProductCarousel'
export default function Home() {
  const categories = useSelector(state => state.categories.categories)
  const {mensWearProducts} = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchAllCategroiesThunk())
    dispatch(getMensWearProductsThunk("Laptop"))
  },[])

  useEffect(()=> {
    console.log("Product --> ",mensWearProducts)
  },[mensWearProducts])
  return (
    <div>
      <div className={style["categories-container"]}>
        {categories.map((category)=> {
          return <CategoryCard key={category.id} name={category.name} img={category.img} />
        })}
      </div>
      <div style={{width:"100%",height:"400px",marginTop:"10px",padding:'10px'}}>
        <MainCarousel/>
      </div>
      <div style={{width:"100%",height:"400px",marginTop:"25px",padding:'10px'}}>
        <h2>Hot Deals on Laptops</h2>
        <ProductCarousel products={mensWearProducts}/>
      </div>
    </div>
  )
}
