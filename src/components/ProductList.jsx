import React, { useEffect, useState } from 'react'
import './ProductList.css'
import ProductCard from './ProductCard'
import useApi from '../hooks/UseApi.js'
import { useParams } from "react-router-dom";


const ProductList = ({selectedCategory,setSelectedCategory}) => {
    // const[products,setProducts] = useState([])
    // const[loading,setLoading] = useState(true);

    // useEffect(()=>{
    //     setLoading(true)
    //     if(loading){
    //         <div>Loading......</div>
    //     }
    //     if(selectedCategory === '')
    //     {
    //         fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>{
    //             setLoading(false)
    //             setProducts(json)  
    //         }
    //         )
    //     }
    //     else{
    //         fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
    //         .then(res=>res.json())
    //         .then(json=>{
    //             setProducts(json)
    //             setLoading(false)
    //         }
    //     )
    //     }
    // },[selectedCategory])
    // console.log(products)
    const {category} = useParams();
    let url = `https://fakestoreapi.com/products`
    if(selectedCategory != '')
    {
        url = `https://fakestoreapi.com/products/category/${category}`
    }
    const{data,loading,loadError} = useApi(url)
    if (loading) return <div className="loading">Fetching products... </div>;
    else if (loadError) return <div>Oops..Please try again</div>;
    else
    return (
    <div className='productList'>
        {
            data.map((product)=>(
                <ProductCard id={product.id} title={product.title} image={product.image}
                price={product.price} 
                category={product.category}
                description={product.description}
                />
            ))
        }
    </div>
  )
}
export default ProductList;