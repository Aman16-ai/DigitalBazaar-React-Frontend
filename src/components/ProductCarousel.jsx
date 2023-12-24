import React from 'react'
import Slider from 'react-slick';
import flipmainOne from "../static/flipsale.jpg"
import flipmainTwo from "../static/flipsale2.jpg"
import ProductCard from './ProductCard';
export default function ProductCarousel(props) {
    const {products} = props
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <div style={{width:"100%",height:"auto",marginTop:"19px"}}>
            <Slider {...settings}>
               {
                products.map((product)=> {
                    return <div style={{marginRight:"25px"}}>
                        <ProductCard product_id={product.id} title={product.title} discount={product.discount} price={product.getFinalPrice} image={product.product_img} />
                    </div>
                }) 
               }
                

            </Slider>
        </div>
    )
}
