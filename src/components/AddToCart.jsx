import { useCartContext } from "../context/cart";

const AddToCart = ({ product }) => {
  const { cart, addToCart, subtractFromCart } = useCartContext();

  const handleAdd = (event) => {
    addToCart(product);
    event.stopPropagation();
  };

  const handleSubtract = (event) => {
    subtractFromCart(product);
    event.stopPropagation();
  };
  
  const productInCart = cart[product.id];
  if (!productInCart)
    return (
      <div onClick={handleAdd} className="add-to-cart">
        Add To Cart
      </div>
    );
  else {
    return (
      <div className="add-to-cart-container">
        <div onClick={handleSubtract} className="add">
          -
        </div>
        <div className="quantity">{productInCart.quantity}</div>
        <div onClick={handleAdd} className="add">
          +
        </div>
      </div>
    );
  }
};

export default AddToCart;
