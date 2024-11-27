import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          뒤로가기
        </Link>
      </p>
    </>
  );
}
export default ProductDetailPage;
