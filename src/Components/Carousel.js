import React from 'react';
import {Carousel} from '3d-react-carousal';
// import Product from "./ListBookD"
// import productsData from "./BookData"

function Slider (){
    // const productComponents = productsData.map(item => <Product key={item.id} product={item.imgurl}/>)
    let slides = [
        // {productComponents}
    
        <img  src="//covers.openlibrary.org/b/id/542870-M.jpg" alt="1" style={{ width: "40rem", height: "35rem" }} />,
        
        <img  src="//covers.openlibrary.org/b/id/3837445-M.jpg" alt="2" style={{ width: "40rem", height: "35rem" }} />  ,
        <img  src="//covers.openlibrary.org/b/id/8017297-M.jpg" alt="3" style={{ width: "40rem", height: "35rem" }}/>,
        <img  src="//covers.openlibrary.org/w/id/4636490-M.jpg" alt="4" style={{ width: "40rem", height: "35rem" }}/>  ,
        <img  src="//covers.openlibrary.org/b/id/3837445-M.jpg" alt="5" style={{ width: "40rem", height: "35rem" }}/>  , ];
        // <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        // <img src="https://picsum.photos/800/304/?random" alt="5" />  
    
    return( 
        
<Carousel slides={slides}/>
    )}

export default Slider