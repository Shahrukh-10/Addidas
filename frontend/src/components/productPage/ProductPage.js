import { React, useState, useEffect } from "react";
import "./productPage.css";
import { useLocation } from "react-router-dom";

const ProductPage = () => {
  const location = useLocation();
  const [product, setproduct] = useState({
    name: "",
    price: "",
    date: "",
    size: "",
    inStock: "",
  });
  useEffect(() => {
    const fetchProd = async () => {
      let prod = await fetch("http://localhost:5000/shoe/" + location.state.id);
      let res = await prod.json();
      console.log(res);
      setproduct({
        name: res.product.shoeName,
        inStock: res.product.shoeInStock,
        date: res.product.shoeAddedDate,
      });
    };
    fetchProd();
    console.log(product);
  }, []);

  return (
    <div>
      ProductPage <p>{product.name}</p>
      <p>{product.inStock}</p>
      <p>{product.date}</p>
    </div>
  );
};

export default ProductPage;
