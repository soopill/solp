<<<<<<< HEAD
import { DUMMY_PRODUCTS } from '../dummy-products.js';
import Product from './Product.jsx';

export default function Shop({ onAddItemToCart }) {
=======
export default function Shop({ children }) {
>>>>>>> 9b9bd9fbf369219ee2b53d46130c933c739e611a
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

<<<<<<< HEAD
      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
=======
      <ul id="products">{children}</ul>
>>>>>>> 9b9bd9fbf369219ee2b53d46130c933c739e611a
    </section>
  );
}
