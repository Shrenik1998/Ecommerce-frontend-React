import './App.css';
import Header from './components/Header'
import ProductList from './components/ProductList'
import React, { useEffect,useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import ShowProduct from './components/ShowProduct';
import CartContextProvider from './context/cart';

function App() {
  const[selectedCategory,setSelectedCategory] = useState('');
  
  return (
    <div className="App">
      <CartContextProvider>
      <Header selectedCategory={selectedCategory} 
      setSelectedCategory={setSelectedCategory}/>
      
      <Routes>
        <Route path='/' 
        element={<ProductList/>}
          // element={<ProductList selectedCategory={selectedCategory} 
          // setSelectedCategory={setSelectedCategory}/>}
        ></Route>

        <Route path='/categories/:category'
        element={<ProductList/>}
          // element={<ProductList selectedCategory={selectedCategory} 
          // setSelectedCategory={setSelectedCategory}/>}
        ></Route>
        <Route path='/products/:productId'
        element={<ShowProduct/>}></Route>
        <Route path='*'
        element={<PageNotFound/>}
        ></Route>
        
        

      </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
