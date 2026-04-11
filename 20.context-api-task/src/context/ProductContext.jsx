import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductDataContext = createContext();

const ProductContext = (props) => {
  const [productData, setProductData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://fakestoreapiserver.reactbd.org/api/products");
    console.log("API response:", response.data);

    setProductData(response.data.data);
  };

  useEffect(function () {
    getData();
  }, []);

  return (
    <div>
      <ProductDataContext.Provider value={productData}>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  );
};

export default ProductContext;
