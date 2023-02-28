import React from 'react'
import Slider from 'react-slick';
import flipmainOne from "../static/flipsale.jpg"
import flipmainTwo from "../static/flipsale2.jpg"
export default function MainCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div style={{width:"100%",height:"400px"}}>
            <Slider {...settings}>
               <div>
               <div style={{width:"100%",height:"400px"}}>
                    <img style={{width:"100%",height:"100%"}} src={flipmainTwo} alt="" />
                </div>
               </div>
                <div>
                <div style={{width:"100%",height:"400px"}}>
                    <img style={{width:'100%',height:"100%"}} src={flipmainOne} />
                </div>
                </div>
                

            </Slider>
        </div>
    )
}
