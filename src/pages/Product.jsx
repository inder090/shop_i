import React, { useContext } from 'react'
import { Shopcontext } from './../context/Shopcontex';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product}=useContext(Shopcontext);
  const {productId}=useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <>
      <Breadcrums product = {product}/>
      <ProductDisplay product={product}/>
    </>
  )
}

export default Product