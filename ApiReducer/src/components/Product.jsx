<<<<<<< HEAD
export default function Product({
  id,
  image,
  title,
  price,
  description,
  onAddToCart,
}) {
=======
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext);
>>>>>>> 9b9bd9fbf369219ee2b53d46130c933c739e611a
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
<<<<<<< HEAD
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => onAddToCart(id)}>Add to Cart</button>
=======
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => addItemToCart(id)}>Add to Cart</button>
>>>>>>> 9b9bd9fbf369219ee2b53d46130c933c739e611a
        </p>
      </div>
    </article>
  );
}
