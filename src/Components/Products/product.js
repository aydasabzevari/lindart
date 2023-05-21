import { useState, useEffect } from "react";
import { getSingleProduct } from "../../API";
import { Button } from "antd";

import "./product.css";
import { useParams } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState(null);
  const param = useParams();

  useEffect(() => {
    getSingleProduct(param.id).then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <>
      {product && (
        <div className="product-wrapper">
          <div className="detail">
            <img className="detail-image" src={product.images[0]} />
            <div className="row">
              <p className="bold">ID: </p>
              <p>{product.id}</p>
            </div>

            <div className="row">
              <p className="bold">Brand: </p>
              <p>{product.brand}</p>
            </div>

            <div className="row">
              <p className="bold">Category: </p>
              <p>{product.category}</p>
            </div>

            <div className="row">
              <p className="bold">Description: </p>
              <p>{product.description}</p>
            </div>

            <div className="row">
              <p className="bold">DiscountPercentage: </p>
              <p>{product.discountPercentage}</p>
            </div>

            <div className="row">
              <p className="bold">Price: </p>
              <p>{product.price}</p>
            </div>

            <div className="row">
              <p className="bold">Rating: </p>
              <p>{product.rating}</p>
            </div>

            <div className="row">
              <p className="bold">Stock: </p>
              <p>{product.stock}</p>
            </div>

            <div className="row">
              <p className="bold">Title: </p>
              <p>{product.title}</p>
            </div>

            <div className="row add-to-cart">
              <Button type="primary" size="large">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
