import React from 'react'
import './ProductList.css'
import {useNavigate} from 'react-router-dom'
import AddToCart from './AddToCart'


const ProductCard = (props) => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(`/products/${props.id}`);
  }
  return (
        <div key={props.id} className='productCard'
        onClick={handleClick}
        >
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.id}></img>
            <h4>${props.price}</h4>
            <h4>{props.category}</h4>
            {/* <p>{product.description}</p> */}
            <AddToCart product={props}/>
        </div>
  )
}

export default ProductCard