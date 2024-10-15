import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Alert} from "react-bootstrap";
import axios from "axios";

const ProductDetails = () => {
  // useParams Hook helps to access the parameters of the current route to manage the dynamic routes in the URL.
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/products/${id}`);
      console.log(response.data);
      setProductDetail(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <Container>
      {error && <Alert variant="danger">Error: {error.message}</Alert>}
      {loading && <Alert variant="info">Loading...</Alert>}

      {productDetail && (
        <>
          <h2>Product Details</h2>
          <p>Price: {productDetail.price} </p>
          <p>Product name: {productDetail.product_name}</p>
          <p>Stock: {productDetail.stock}</p>
        </>
      )}
    </Container>
  );
};

export default ProductDetails;
