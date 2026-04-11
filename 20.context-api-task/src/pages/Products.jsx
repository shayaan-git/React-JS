import { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import NavHomePage from "./NavHomePage";

const Products = () => {
  const productData = useContext(ProductDataContext);

  let renderData = "Loading Products...";

  if (productData.length > 0) {
    renderData = productData.map((elem, idx) => {
      return (
        <Link to={`/products/${elem._id}`} className="product" key={idx}>
          <img src={elem.image} alt="" />
          <h2>{elem.title}</h2>
        </Link>
      );
    });
  }

  return (
    <div>
      <NavHomePage />
      <div className="all-products">{renderData}</div>
    </div>
  );
};

export default Products;
