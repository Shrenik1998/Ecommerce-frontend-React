import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    /**
     * whenever we want to make changes to our state
     * based on prev state, we pass a function to setState
     * which has access to prev state in form of a parameter
     */
    // setCart(function(prevCart){

    // })
    setCart((prevCart) => {
      // prevCart[product.id].quantity += 1 -> don't do this
      const newCart = { ...prevCart };
      // if item is not in the cart
      if (!prevCart[product.id]) {
        newCart[product.id] = {
          id: product.id,
          quantity: 1
        };
        // if the product is already in the cart
      } else {
        // pull the product from cart
        const newProduct = { ...prevCart[product.id] };
        newProduct.quantity += 1;
        newCart[product.id] = newProduct;
      }
      return newCart;
    });
  };

  const subtractFromCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      // if item does not exist in the cart
      if (!prevCart[product.id]) return prevCart;
      // items exists but the quantity is 1
      else if (prevCart[product.id].quantity === 1) {
        delete newCart[product.id];
      }
      // items exists and the quantity is more than 1
      else {
        const newProduct = { ...prevCart[product.id] };
        newProduct.quantity -= 1;
        newCart[product.id] = newProduct;
      }
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, subtractFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
