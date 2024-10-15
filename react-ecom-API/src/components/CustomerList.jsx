import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Alert, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(`http://127.0.0.1:5000/customers/${id}`);
      console.log(response);
      fetchCustomers(); // Reload the list after deleting
    } catch (error) {
      console.log(error);
      setError({"message": "Customer is connected to an order, cannot delete"});
    } finally {
      setLoading(false);
    }
  };

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/customers');
      console.log(response.data);
      setCustomers(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);


  return (
    <Container>
      {error && <Alert variant='danger'>Error: {error.message}</Alert>}
      {loading && <Alert variant='info'>Loading...</Alert>}

      <h1>Customer List</h1>
      {/* Adding link to add Customers */}
      <Link to="/add-customers"><Button variant='primary' className='mb-3'>Add New Customer</Button></Link>

      <ListGroup>
        {/* Mapping Customer */}
        {customers.map(customer => (
          <ListGroup.Item key={customer.id} className='d-flex justify-content-between align-items-center shadow-sm p-3 mb-3 bg-white rounded'>
            {/* Link to customer details with id*/}
            <Link to={`/customer/${customer.id}`}>{customer.customer_name} {customer.name}</Link>
            {/* link with button to update customer with ${id}*/}
            <Link to={`/update-customer/${customer.id}`}><Button variant='outline-warning' className='mb-3'>update customer</Button></Link>
            {/* Delete Button */}
            <Button variant='outline-danger' size='sm' onClick={() => handleDelete(customer.id)}>Delete</Button>
          </ListGroup.Item>
          
        ))}
      </ListGroup>
    </Container>
  );
};

export default CustomerList;