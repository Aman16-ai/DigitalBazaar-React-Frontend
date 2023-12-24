import React, { useEffect, useState } from 'react'
import CategoryCard from '../components/CategoryCard'
import style from "./Style/Home.module.css"
import { fetchAllCategroies, getAllProducts } from '../services/productService'
import { getUser } from '../services/authService'
import MainCarousel from '../components/MainCarousel'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategroiesThunk } from '../store/slice/categorySlice'
import { getAllProductsThunk, getLaptopProductsThunk, getMensProductThunk } from '../store/slice/productSlice'
import ProductCard from '../components/ProductCard'
import ProductCarousel from '../components/ProductCarousel'
import ProductListContainer from '../components/ProductListContainer'
export default function Home() {
  const categories = useSelector(state => state.categories.categories)
  const {laptopDeals,mensWearProducts} = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchAllCategroiesThunk())
    dispatch(getLaptopProductsThunk("Laptop"))
    dispatch(getMensProductThunk("Men's wear"))
  },[])

  useEffect(()=> {
    console.log("Product --> ",laptopDeals)
  },[laptopDeals])
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
      <ProductListContainer products={laptopDeals} title={"Hot Deals on Laptops"}/>
      <ProductListContainer products={mensWearProducts} title={"Top Products for Mens"}/>

    </div>
  )
}
