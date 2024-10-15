import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Alert} from "react-bootstrap";
import axios from "axios";

const CustomerDetails = () => {
  // useParams Hook helps to access the parameters of the current route to manage the dynamic routes in the URL.
  const { id } = useParams();
  const [customerDetail, setCustomerDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCustomerDetails = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/customers/${id}`);
      console.log(response.data);
      setCustomerDetail(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomerDetails();
  }, []);

  return (
    <Container>
      {error && <Alert variant="danger">Error: {error.message}</Alert>}
      {loading && <Alert variant="info">Loading...</Alert>}

      {customerDetail && (
        <>
          <h2>Customer Details</h2>
          <p>Name: {customerDetail.customer_name} </p>
          <p>Email: {customerDetail.email}</p>
          <p>Phone: {customerDetail.phone}</p>
        </>
      )}
    </Container>
  );
};

export default CustomerDetails;
