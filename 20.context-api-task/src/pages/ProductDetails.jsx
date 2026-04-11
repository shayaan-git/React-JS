import { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import NavHomePage from "./NavHomePage";
import NavProductPage from "./NavProductPage";

const ProductDetails = () => {
  const productData = useContext(ProductDataContext);

  const { id } = useParams();

  let selectedProduct = "";
  
  if (productData.length > 0) {
    selectedProduct = productData.find((elem) => id == elem._id);
  }

  return (
    <div>
      <div className="navbar-area">
        <NavHomePage />
        <NavProductPage />
      </div>

      <div className="single-prod">
        <img src={selectedProduct?.image} />
        <span>
          <h2>{selectedProduct?.title}</h2>
          <h6>{selectedProduct?.category}</h6>
          <h5>Price: ${selectedProduct?.price}</h5>
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
