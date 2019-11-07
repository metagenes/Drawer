import React from 'react';
import {Carousel} from '3d-react-carousal';


function Slider (){
    let slides = [
        
        
        <img  src="//covers.openlibrary.org/b/id/542870-M.jpg" alt="1" />,
        <img  src="//covers.openlibrary.org/b/id/6698666-M.jpg" alt="2" />  ,
    <img  src="//covers.openlibrary.org/b/id/6617915-M.jpg" alt="3" />, ];
        // <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        // <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
    
    return( 
    
<Carousel slides={slides}/>
    )}

export default Slider