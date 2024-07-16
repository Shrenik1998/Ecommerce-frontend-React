import React from 'react'
import { useParams } from 'react-router-dom'
import useApi from '../hooks/UseApi.js'
import AddToCart from './AddToCart.jsx'

const ShowProduct = () => {
    const{productId} = useParams()
    const{data,loading,loadError} = useApi(`https://fakestoreapi.com/products/${productId}`)
    if (loading) return <div className="loading">Fetching products... </div>;
    else if (loadError) return <div>Oops..Please try again</div>;
    else
    return (
        <div className='productShow'
        >
            <h3>{data.title}</h3>
            <img src={data.image} alt={data.id}></img>
            <h4>${data.price}</h4>
            <h4>{data.category}</h4>            
            <p>{data.description}</p> 
            <AddToCart product={data}/>
        </div>
    )
}

export default ShowProduct