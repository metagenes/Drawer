//simple card
import React from 'react';
import Product from "./ListBook"
import productsData from "./BookData"

export default function MediaCard() {
  const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)
  return (
    <div>
      {productComponents} 
      </div>
  );
}
