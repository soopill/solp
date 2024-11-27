import { Link } from "react-router-dom";

const PRODUCT = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function ProductPage() {
  return (
    <>
      <h1>프로덕트 페이지</h1>
      <ul>
        {PRODUCT.map((prod) => (
          <li key={prod.id}>
            <Link to={`/product/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ProductPage;
