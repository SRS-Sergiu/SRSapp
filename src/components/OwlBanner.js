import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function OwlBanner(){
        return(
                <OwlCarousel items={3} 
                    className="owl-theme"  
                    loop  
                    nav  
                    margin={8} >  

                    <div ><img  className="img" src= {'images/img1.jpeg'}/></div>  
                    <div><img  className="img" src= {'images/img2.jpeg'}/></div>  
                    <div><img  className="img" src= {'images/img3.jpeg'}/></div>  
            </OwlCarousel>  
                  
        )
}