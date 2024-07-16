import React, { useEffect,useState } from 'react'
import useApi from '../hooks/UseApi';
import './Header.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/cart";

function Header({selectedCategory,setSelectedCategory}) {
    
    // const[allCatogries,setAllCatogaries] = useState([]);
    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products/categories')
    //         .then(res=>res.json())
    //         .then(json=>setAllCatogaries(json))
    // },[])
    // console.log(selectedCategory)

    const{data,loading,loadError} = useApi(`https://fakestoreapi.com/products/categories`)
    const { cart } = useCartContext();
    const totalItems = () => {
    let total = 0;
      for (let obj in cart) {
      total += cart[obj].quantity;
      }
    return total;
    };

    if (loading) return <div className="loading">Fetching products... </div>;
    else if (loadError) return <div>Oops..Please try again</div>;
    else
  return (
    <div className='allCategories'>
        {data.map(category => (
            <Link
              to={`categories/${category}`}
            className={"catogery"+(category===selectedCategory?"Selected" :" ")} 
            key={category} 
            onClick={()=>setSelectedCategory(category)}>
            
            {category}

            </Link>
        ))}
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-length">{totalItems()}</span>
    </div>
  )
}

export default Header;