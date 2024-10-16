# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<hr>

# Create a new project

### type these commands in your terminal:

==**npx create-vite react-ecommerce --template react**==
​
==**cd react-ecommerce
npm install
npm run dev**==

### install additional dependencies

##### To set up React Bootstrap in your project, you'll need to install the necessary dependencies.

https://react-bootstrap.netlify.app/

==**npm i axios react-bootstrap bootstrap react-router-dom**==

**First, make sure you've installed the react-bootstrap package as shown in the command above. Then, you'll need to import the Bootstrap CSS in your main application file (usually App.js or index.js). Here's how you can do that:**

==**import 'bootstrap/dist/css/bootstrap.min.css';**==

#### After importing the CSS, you can start using React Bootstrap components in your project.

<hr>

#### Files that are safe to delete in react:

**public and assets**

![Assets Folder](https://codingtemple.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F833abfe9-9ed0-4d7c-9473-f1ece2104e38%2Fb3fb1311-2c2b-4ba4-9c83-e3c7a4f4cd6f%2FScreenshot_2024-10-03_at_1.21.56_PM.png?table=block&id=114d15b0-3f0a-805a-b376-e2e0fb3ff2f5&spaceId=833abfe9-9ed0-4d7c-9473-f1ece2104e38&width=660&userId=&cache=v2)

![Public Folder](https://codingtemple.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F833abfe9-9ed0-4d7c-9473-f1ece2104e38%2F8d818e6b-178b-4948-95c6-3a1c6d550796%2FScreenshot_2024-10-03_at_1.21.40_PM.png?table=block&id=114d15b0-3f0a-80c8-9739-e5a996f8bd98&spaceId=833abfe9-9ed0-4d7c-9473-f1ece2104e38&width=660&userId=&cache=v2)

**default css**

![index.css](https://codingtemple.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F833abfe9-9ed0-4d7c-9473-f1ece2104e38%2Ffc50b194-cbaa-462e-ba03-bcf35f4ed5af%2FScreenshot_2024-10-03_at_1.22.12_PM.png?table=block&id=114d15b0-3f0a-80f9-88ff-fa1de77ae2c9&spaceId=833abfe9-9ed0-4d7c-9473-f1ece2104e38&width=370&userId=&cache=v2)

![App.css](https://codingtemple.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F833abfe9-9ed0-4d7c-9473-f1ece2104e38%2F991e7468-6457-416b-980a-7f73db3e78dd%2FScreenshot_2024-10-03_at_1.22.06_PM.png?table=block&id=114d15b0-3f0a-805e-bdd8-effcf5b90493&spaceId=833abfe9-9ed0-4d7c-9473-f1ece2104e38&width=370&userId=&cache=v2)

#### Don’t forget to remove the import here in main.jsx

![main.jsx](https://codingtemple.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F833abfe9-9ed0-4d7c-9473-f1ece2104e38%2Fe6168efd-66dc-4d3e-87e6-d7f09aef39e0%2FScreenshot_2024-10-03_at_1.22.28_PM.png?table=block&id=114d15b0-3f0a-805b-b656-cd7c3123fc8d&spaceId=833abfe9-9ed0-4d7c-9473-f1ece2104e38&width=1380&userId=&cache=v2)

#### And reset your app.jsx

![app.jsx](https://codingtemple.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F833abfe9-9ed0-4d7c-9473-f1ece2104e38%2F5cbcf95b-461b-4b76-b28e-1758e6ca52d7%2FScreenshot_2024-10-03_at_1.22.48_PM.png?table=block&id=114d15b0-3f0a-80f8-99fd-fe1fee258019&spaceId=833abfe9-9ed0-4d7c-9473-f1ece2104e38&width=1120&userId=&cache=v2)

<br>

#### From here we can start creating components for our E-com application!! ![alt text](https://i.pinimg.com/control/564x/c3/69/23/c36923fc3fcc6d4002e54406a91f254f.jpg)

<hr>

## Mini Project: React E-commerce Web Application

### Project Requirements

**The main objective is to build out the front-end of an e-commerce application. To do this you will be making API calls to your e-commerce Flask API. Make sure your Flask API is running and then you will be able to make calls to http://localhost:5000. To successfully build our front-end e-commerce application and achieve the learning objectives, we need to establish clear project requirements. These requirements outline the key features and functionalities that our application must encompass. Below, you'll find a comprehensive list of project requirements based on our learning objectives:**

<hr>

### Customer and CustomerAccount Management:

#### Create React components and functionality for managing Customers and their associated CustomerAccounts:

**Create Customer Form: Develop a form component to capture and submit essential customer information, including ==name==, ==email==, and ==phone number==.**

## ==<u>Customer Form Component:</u>==

```
import { useState } from 'react'
import axios from 'axios'
import { Alert, Button, Container, Form, Modal } from 'react-bootstrap'

const CustomerForm = () => {

  // Customer Variables
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [modalName, setModalName] = useState('')

  // Form State Variables
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // API error
  const [error, setError] = useState(null)

  // Form validate errors
  const [errors, setErrors] = useState(null)
  // const [errors, setErrors] = useState({
  //   "name": '',
  //   "email": '',
  //   "password": ''
  // })


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const errors = validateForm()
    if (Object.keys(errors).length > 0){
      setErrors(errors)
      return
    }

    // Begin the loading process
    setIsLoading(true)
    setError(null)

    const customer = {
      "customer_name": name,
      "email": email,
      "phone": phone
    }
    console.log(customer)

    try {
      const response = await axios.post("http://127.0.0.1:5000/customers", customer, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = response.data;
      console.log("Customer Created:", data)

      // Trigger popup with success message (modal)
      setShowSuccessModal(true)
      setModalName(name)

      // Reset the form
      setName('')
      setEmail('')
      setPhone('')

    } catch (error) {
	    console.log("Error", error)
	    setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const validateForm = () => {
    const errors = {}
    // const errors = {
    //   "name": '',
    //   "email": '',
    //   "phone": ''
    // }
    if (!name) errors.name = "Name is required"
    if (!email) errors.email = "Email is required"
    if (!phone) errors.phone = "Phone is required"
    return errors
  }

  return (
    <Container>

      <h2>New Customer</h2>

      { isLoading && <Alert variant='info'>Submitting customer data...</Alert> }
      { error && <Alert variant='danger'>Error: {error}</Alert> }

      <Form onSubmit={handleSubmit}>


        {/* Name section */}
        <Form.Group controlId='formGroupName'>
          {/* Replace label, input with Form.Label and Form.Control */}
          <Form.Label>Name:</Form.Label>
          <Form.Control type='text' value={name} onChange={(e) => setName(e.target.value) }/>
          { errors?.name && <Alert variant='danger'>{errors.name}</Alert> }
        </Form.Group>

        <br />

        {/* Email section */}
        <Form.Group controlId='formGroupEmail'>
          <Form.Label>Email:</Form.Label>
          <Form.Control type='email' value={email} onChange={(e) => setEmail(e.target.value) }/>
          { errors?.email && <Alert>Email is required</Alert> }
        </Form.Group>

        <br />

        {/* Phone section */}
        <Form.Group controlId='formGroupPhone'>
          <Form.Label>Phone:</Form.Label>
          <Form.Control type='phone' value={phone} onChange={(e) => setPhone(e.target.value) }/>
          { errors?.phone && <Alert>Phone is required</Alert> }
        </Form.Group>

        <br />

        <Button type='submit' disabled={isLoading}>
          { isLoading ? 'Creating Customer...' : 'Create Customer' }
        </Button>
      </Form>

       {/* Modal */}
       <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{modalName} created successfully!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='danger' onClick={() => setShowSuccessModal(false)}>Close</Button>
          </Modal.Footer>
       </Modal>


    </Container>
  )
}

export default CustomerForm
```

**Read Customer Details: Create a component to display customer details retrieved from the backend based on their unique identifier (ID).**

## ==<u>Customer Details Components:</u>==

```
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
```

**Update Customer Form: Build a form component that allows users to update customer details, including the name, email, and phone number.**

## ==<u>Update Customer Component:</u>==

```
import { useState } from 'react'
import axios from 'axios'
import { Alert, Button, Container, Form, Modal } from 'react-bootstrap'
import { useParams } from "react-router-dom";

const UpdateCustomer = () => {

  // Customer Variables
  const { id } = useParams();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [modalName, setModalName] = useState('')

  // Form State Variables
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // API error
  const [error, setError] = useState(null)

  // Form validate errors
  const [errors, setErrors] = useState(null)
  // const [errors, setErrors] = useState({
  //   "name": '',
  //   "email": '',
  //   "password": ''
  // })


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const errors = validateForm()
    if (Object.keys(errors).length > 0){
      setErrors(errors)
      return
    }

    // Begin the loading process
    setIsLoading(true)
    setError(null)

    const customer = {
      "customer_name": name,
      "email": email,
      "phone": phone
    }
    console.log(customer)

    try {
      const response = await axios.put(`http://127.0.0.1:5000/customers/${id}`, customer, {
        headers: {
          'Content-Type': 'Application/json'
        }
      })

      const data = response.data;
      console.log("Customer Created:", data)

      // Trigger popup with success message (modal)
      setShowSuccessModal(true)
      setModalName(name)

      // Reset the form
      setName('')
      setEmail('')
      setPhone('')

    } catch (error) {
	    console.log("Error", error)
	    setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const validateForm = () => {
    const errors = {}
    // const errors = {
    //   "name": '',
    //   "email": '',
    //   "phone": ''
    // }
    if (!name) errors.name = "Name is required"
    if (!email) errors.email = "Email is required"
    if (!phone) errors.phone = "Phone is required"
    return errors
  }

  return (
    <Container>

        <h2>Update Customer Details</h2>

      { isLoading && <Alert variant='info'>Submitting customer data...</Alert> }
      { error && <Alert variant='danger'>Error: {error}</Alert> }

      <Form onSubmit={handleSubmit}>


        {/* Name section */}
        <Form.Group controlId='formGroupName'>
          {/* Replace label, input with Form.Label and Form.Control */}
          <Form.Label>Name:</Form.Label>
          <Form.Control type='text' value={name} onChange={(e) => setName(e.target.value) }/>
          { errors?.name && <Alert variant='danger'>{errors.name}</Alert> }
        </Form.Group>

        <br />

        {/* Email section */}
        <Form.Group controlId='formGroupEmail'>
          <Form.Label>Email:</Form.Label>
          <Form.Control type='email' value={email} onChange={(e) => setEmail(e.target.value) }/>
          { errors?.email && <Alert>Email is required</Alert> }
        </Form.Group>

        <br />

        {/* Phone section */}
        <Form.Group controlId='formGroupPhone'>
          <Form.Label>Phone:</Form.Label>
          <Form.Control type='phone' value={phone} onChange={(e) => setPhone(e.target.value) }/>
          { errors?.phone && <Alert>Phone is required</Alert> }
        </Form.Group>

        <br />

        <Button type='submit' disabled={isLoading}>
          { isLoading ? 'Updating Customer...' : 'Update Customer' }
        </Button>
      </Form>

       {/* Modal */}
       <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{modalName} successfully updated!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='danger' onClick={() => setShowSuccessModal(false)}>Close</Button>
          </Modal.Footer>
       </Modal>


    </Container>
  )
}

export default UpdateCustomer
```

**Delete Customer Information: Build a function in your Customer Detail Component that when triggered will delete a customer from the backend based on their unique identifier (ID).**

## ==<u>Delete Customer Function:</u>==

```
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

<Button variant='outline-danger' size='sm' onClick={() => handleDelete(customer.id)}>Delete</Button>
```

**Customer Confirmation Modules: Design a confirmation modal or component for securely creating, updating, or deleting a customer from the system based on their ID.**

## ==<u>Modal Function:</u>==

```
    setShowSuccessModal(true)
      setModalName(name)

    <!-- BELOW GOES IN RETURN CONTAINER! -->
      
       {/* Modal */}
       <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{modalName} created successfully!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='danger' onClick={() => setShowSuccessModal(false)}>Close</Button>
          </Modal.Footer>
       </Modal>
```
<hr>

### Product Catalog: 
####  Create React components and functionality for managing Products:

**List Products: Create a component to display a list of all available products in the e-commerce platform, providing essential product information.**

## ==<u>Product Catalog Component:</u>==

```
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Container, Alert, Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    try {
      setLoading(true)

      const response = await axios.delete(`http://127.0.0.1:5000/products/${id}`)
      console.log(response)

      fetchProducts();
    
    } catch (error) {
      console.log(error)
      setError({"message": "Product is connected to order, cannot delete"});
    } finally {
      setLoading(false)
    }
  }

  // Got Products from API 
  const fetchProducts = async () => {
    try {
    const response = await axios.get('http://127.0.0.1:5000/products');
    console.log(response)
    setProducts(response.data);
    } catch (error) {
    setError(error);
    } finally {
    setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>

    { error && <Alert variant='danger'>Error: {error.message}</Alert> }
    {/* { loading && <Alert variant='info'>Loading...</Alert> } */}

    <h1>Product List</h1>
    <Link to="/add-product"><Button variant='primary' className='mb-3'>Add New Product</Button></Link>

    <ListGroup>
      {products.map(product => (
        <ListGroup.Item key={product.id} className='d-flex justify-content-between align-items-center shadow-sm p-3 mb-3 bg-white rounded'>

          {/* TODO - add edit product route to app.jsx */}
          <Link to={`/product/${product.id}`} >{product.product_name}</Link>
          {/* link with button to update customer with ${id}*/}
          <Link to={`/edit-product/${product.id}`}><Button variant='outline-warning' className='mb-3'>update product</Button></Link>

          <Button variant='outline-danger' size='sm'
            onClick={() => {handleDelete(product.id)}}
          >Delete</Button>

        </ListGroup.Item>
      ))}
    </ListGroup>

  </Container>
  )
}

export default ProductCatalog
```

**Create Product Form: Develop a form component for adding a new product to the e-commerce database. Capture essential product details, such as the product name and price.**

## ==<u>Adding New Products:</u>==

```
import { useState } from 'react'
import axios from 'axios'
import { Alert, Button, Container, Form, Modal } from 'react-bootstrap'

const AddProducts = () => {

  // Customer Variables
  const [price, setPrice] = useState('')
  const [product, setProduct] = useState('')
  const [stock, setStock] = useState('')
  const [modalName, setModalName] = useState('')

  // Form State Variables
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // API error 
  const [error, setError] = useState(null)

  // Form validate errors 
  const [errors, setErrors] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault(); 

    console.log("Prevented Default")

    // Validate the form 
    const errors = validateForm()
    if (Object.keys(errors).length > 0){
      setErrors(errors)
      return
    }

    console.log("validated form")

    // Begin the loading process
    setIsLoading(true)
    setError(null)

    const new_product = {
      "price": price, 
      "product_name": product, 
      "stock": stock,
      "availability": true,
    }
    // console.log("product:", new_product)

    try {
      const response = await axios.post("http://127.0.0.1:5000/products", new_product, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = response.data;
      console.log("Product Created:", data)

      // Trigger popup with success message (modal)
      setShowSuccessModal(true)
      setModalName(product)

      // Reset the form 
      setPrice('')
      setProduct('')
      setStock('')

    } catch (error) {
	    console.log("Error", error)
	    setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const validateForm = () => {
    const errors = {}

    if (!price) errors.price = "Price is required"
    if (!product) errors.product = "Product is required"
    if (!stock) errors.stock = "Stock is required"
    return errors 
  }

  return (
    <Container>

        <h2>New Product</h2>

      { isLoading && <Alert variant='info'>Submitting product data...</Alert> }
      { error && <Alert variant='danger'>Error: {error}</Alert> }

      <Form onSubmit={handleSubmit}>
        

        {/* Price section */}
        <Form.Group controlId='formGroupPrice'>
          {/* Replace label, input with Form.Label and Form.Control */}
          <Form.Label>Price:</Form.Label>
          <Form.Control type='price' value={price} onChange={(e) => setPrice(e.target.value) }/>
          { errors?.price && <Alert variant='danger'>{errors.price}</Alert> }
        </Form.Group>

        <br />

        {/* Product name section */}
        <Form.Group controlId='formGroupProduct'>
          <Form.Label>Product Name:</Form.Label>
          <Form.Control type='Product' value={product} onChange={(e) => setProduct(e.target.value) }/>
          { errors?.product && <Alert>Product name is required</Alert> }
        </Form.Group>

        <br />

        {/* Stock section */}
        <Form.Group controlId='formGroupStock'>
          <Form.Label>Stock:</Form.Label>
          <Form.Control type='stock' value={stock} onChange={(e) => setStock(e.target.value) }/>
          { errors?.stock && <Alert>Stock is required</Alert> }
        </Form.Group>

        <br />

        <Button type='submit' disabled={isLoading}>
          { isLoading ? 'Creating Product...' : 'Create Product' }
        </Button>
      </Form>

       {/* Modal */}
       <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{modalName} created successfully!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='danger' onClick={() => setShowSuccessModal(false)}>Close</Button>
          </Modal.Footer>
       </Modal>
       

    </Container>
  )
}

export default AddProducts
```

**Read Product Details: Create a component to display product details retrieved from the backend based on the product's unique identifier (ID).**

## ==<u>Product Details Component:</u>==

```
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
```

**Update Product Form: Build a form component that allows users to update product details, including the product name and price.**

## ==<u>Update Product Component:</u>==

```
import { useState } from "react";
import axios from "axios";
import { Alert, Button, Container, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";

//  TODO: make edit products functional!
const EditProducts = () => {
  // Product Variables
  const { id } = useParams();
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState("");
  const [stock, setStock] = useState("");
  const [modalName, setModalName] = useState("");

  // Form State Variables
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // API error
  const [error, setError] = useState(null);

  // Form validate errors
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Begin the loading process
    setIsLoading(true);
    setError(null);

    const updated_product = {
      price: price,
      product_name: product,
      stock: stock,
    };
    console.log(product);
    try {
        const response = await axios.put(`http://127.0.0.1:5000/products/${id}`, updated_product, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
  
        const data = response.data;
        console.log("Product Created:", data)
  
        // Trigger popup with success message (modal)
        setShowSuccessModal(true)
        setModalName(updated_product.product_name)
  
        // Reset the form 
        setPrice('')
        setProduct('')
        setStock('')
  
      } catch (error) {
          console.log("Error", error)
          setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
  
    const validateForm = () => {
      const errors = {}
      if (!price) errors.price = "Price is required"
      if (!product) errors.product = "Product is required"
      if (!stock) errors.stock = "Stock is required"
      return errors 
    }

  return (
    <Container>
      <h2>Update Product</h2>

      {isLoading && <Alert variant="info">Submitting product data...</Alert>}
      {error && <Alert variant="danger">Error: {error}</Alert>}

      <Form onSubmit={handleSubmit}>
        {/* price section */}
        <Form.Group controlId="formGroupPrice">
          {/* Replace label, input with Form.Label and Form.Control */}
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors?.price && <Alert variant="danger">{errors.price}</Alert>}
        </Form.Group>

        <br />

        {/* product section */}
        <Form.Group controlId="formGroupProductName">
          <Form.Label>Product name:</Form.Label>
          <Form.Control
            type="productName"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          {errors?.product && <Alert>Product is required</Alert>}
        </Form.Group>

        <br />

        {/* stock section */}
        <Form.Group controlId="formGroupStock">
          <Form.Label>Stock:</Form.Label>
          <Form.Control
            type="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          {errors?.stock && <Alert>Stock is required</Alert>}
        </Form.Group>

        <br />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Updating Product..." : "Update Product"}
        </Button>
      </Form>

      {/* Modal */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalName} successfully updated!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowSuccessModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default EditProducts;
```

**Delete Product Information: Build a function in your Product Detail Component that when triggered will delete a product from the backend based on their unique identifier (ID).**

## ==<u>Delete Function:</u>==
```
  const handleDelete = async (id) => {
    try {
      setLoading(true)

      const response = await axios.delete(`http://127.0.0.1:5000/products/${id}`)
      console.log(response)

      fetchProducts();
    
    } catch (error) {
      console.log(error)
      setError({"message": "Product is connected to order, cannot delete"});
    } finally {
      setLoading(false)
    }
  }

  <Button variant='outline-danger' size='sm'
            onClick={() => {handleDelete(product.id)}}
          >Delete</Button>
```

**Product Confirmation Module: Design a confirmation modal or component for securely creating, updating or deleting a product from the system based on its unique ID.**

## ==<u>Modal Function:</u>==

```
      // Trigger popup with success message (modal)
      setShowSuccessModal(true)
      setModalName(product)

      <!-- BELOW BELONGS IN RETURN CONTAINER -->

      {/* Modal */}
       <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{modalName} created successfully!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='danger' onClick={() => setShowSuccessModal(false)}>Close</Button>
          </Modal.Footer>
       </Modal>
```

**View and Manage Product Stock Levels (Bonus): Develop a component for viewing and managing the stock levels of each product in the catalog. Administrators should be able to see the current stock level and make adjustments as needed.**

# ==<u>TODO:</u>==

**Restock Products When Low (Bonus): Implement a component that monitors product stock levels and triggers restocking when they fall below a specified threshold. Ensure that stock replenishment is efficient and timely.**

# ==<u>TODO:</u>==

### Order Processing: 
#### Develop React components and functionality for efficient handling of customer orders:

**Place Order Form: Create a form component for customers to place new orders, specifying the products they wish to purchase and providing essential order details. Each order should capture the order date and the associated customer.**

## ==<u>Order Form:</u>==

```
import { useState } from 'react'
import axios from 'axios'
import { Alert, Button, Container, Form, Modal } from 'react-bootstrap'

const OrderForm = () => {

//order Variables
//const [productName, setProductName] = useState('')
  const [customerId, setCustomerId] = useState('')
  const [orderDate, setOrderDate] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const [modalName, setModalName] = useState('')

  // Form State Variables
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // API error 
  const [error, setError] = useState(null)

  // Form validate errors 
  const [errors, setErrors] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    // Validate the form 
    const errors = validateForm()
    if (Object.keys(errors).length > 0){
      setErrors(errors)
      return
    }

    // Begin the loading process
    setIsLoading(true)
    setError(null)

// example for correct data
    // const order2 = {
    //     "customer_id": 2,
    //     "delivery_date": "2024-08-31",
    //     "order_date": "2024-08-30"
    // } 

    // Correct order format if incorrect
    // correct: year - month - day
    // incorrect: month- day- year 

    const date_to_format = new Date(orderDate)

    const order = {
        "customer_id": customerId,
        "delivery_date": deliveryDate,
        "order_date": orderDate,
    }

    console.log(order)

    try {
      const response = await axios.post("http://127.0.0.1:5000/orders", order, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = response.data;
      console.log("Order Created:", data)

      // Trigger popup with success message (modal)
      setShowSuccessModal(true)
      setModalName('Order created successfully')

      // Reset the form 
    //   setProductName('')
      setCustomerId('')
      setOrderDate('')
      setDeliveryDate('')

    } catch (error) {
	    console.log("Error", error)
	    setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const validateForm = () => {
    const errors = {}
    // if (!productName) errors.productName = "Product name is required"
    if (!customerId) errors.customerId = "Customer ID is required"
    if (!orderDate) errors.orderDate = "Order date is required"
    if (!deliveryDate) errors.deliveryDate = "Delivery date is required"
    return errors 
  }

  return (
    <Container>

      <h2>New Order</h2>

      { isLoading && <Alert variant='info'>Submitting customer data...</Alert> }
      { error && <Alert variant='danger'>Error: {error}</Alert> }

      <Form onSubmit={handleSubmit}>
        

        {/* product Name section */}
        {/* <Form.Group controlId='formGroupProductName'>
          {/* Replace label, input with Form.Label and Form.Control */}
          {/* <Form.Label>Product Name:</Form.Label>
          <Form.Control type='text' value={productName} onChange={(e) => setProductName(e.target.value) }/>
          { errors?.productName && <Alert variant='danger'>{errors.productName}</Alert> }
        </Form.Group> */}

        {/* <br />  */}

        {/* Customer ID */}
        <Form.Group controlId='formGroupCustomerId'>
          <Form.Label>Customer ID:</Form.Label>
          <Form.Control type='customerId' value={customerId} onChange={(e) => setCustomerId(e.target.value) }/>
          { errors?.customerId && <Alert>Customer ID is required</Alert> }
        </Form.Group>

        <br />

        {/* order date section */}
        <Form.Group controlId='formGroupOrderDate'>
          <Form.Label>Order Date:</Form.Label>
          <Form.Control type='orderDate' value={orderDate} onChange={(e) => setOrderDate(e.target.value) }/>
          { errors?.orderDate && <Alert>Order date is required</Alert> }
        </Form.Group>

        <br />

        {/* delivery date section */}
        <Form.Group controlId='formGroupPhone'>
          <Form.Label>Delivery Date:</Form.Label>
          <Form.Control type='deliveryDate' value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value) }/>
          { errors?.deliveryDate && <Alert> Delivery date is required</Alert> }
        </Form.Group>

        <br />

        <Button type='submit' disabled={isLoading}>
          { isLoading ? 'Creating order...' : 'Create Order' }
        </Button>
      </Form>

       {/* Modal */}
       <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{modalName}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='danger' onClick={() => setShowSuccessModal(false)}>Close</Button>
          </Modal.Footer>
       </Modal>
       

    </Container>
  )
}

export default OrderForm
```

**Retrieve Order Details: Implement a component that allows customers to retrieve details of a specific order based on its unique identifier (ID). Provide a clear overview of the order, including the order date and associated products.**

# ==<u>TODO:</u>==


**Track Order Status: Develop a component that enables customers to track the status and progress of their orders. Customers should be able to access information such as order dates and expected delivery dates.**

## ==<u>Track Order:</u>==

```
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios' // Add this import
import { ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TrackOrder = () => {
  const [orderID, setOrderID] = useState('')
  // const [order, setOrder] = useState(null)
  const [order, setOrder] = useState({
    "customer_id": 4,
    "delivery_date": "2024-09-06",
    "id": 4, 
    "order_date": "2024-09-02"
  })
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const [orderStatus, setOrderStatus] = useState({
    "variant": "danger", 
    "message": "In Progress",
    "value": 50
  })


  const trackOrder = async (e) => {
    e.preventDefault(); 

    try {
      setIsLoading(true)

      const response = await axios.get('http://127.0.0.1:5000/orders')
      console.log(response)
      setOrder(response.data)

      // Do some calculations about date 
      // We should check if the current date > delivery date (update order status to complete)
        const currentDate = new Date(); 
        const delivery = new Date(response.data.delivery_date)
        const isLate = currentDate > delivery 

        if (isLate) {
          setOrderStatus({
            "variant": "success", 
            "message": "Complete",
            "value": 100
          })
        } else {
          setOrderStatus({
            "variant": "danger", 
            "message": "In Progress",
            "value": 50
          })
        }
      // if it is not - keep the same 

      // Reset the form
      setOrderID('')

    } catch (error){
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <h2>Orders</h2>
      <Link to="/orders"><Button variant='primary' className='mb-3'>Add New Order</Button></Link>

      {/* Form to get the ID */}
      <Form onSubmit={trackOrder}>
        <Form.Group controlId='formBasicOrderID'>
          <Form.Label>What order would you like to track?</Form.Label>
          <Form.Control type='number' value={orderID} onChange={(e) => setOrderID(e.target.value)}/>
        </Form.Group>

        <br />

        <Button type="submit">Submit</Button>

      </Form>

      {/* Display data about the order */}
      {/* Track Order Status: Develop a component that enables customers to track the status 
      and progress of their orders. 
      Customers should be able to access information such as order dates and expected 
      delivery dates. */}

      <br />

      <div className='order-details-container'>
        { order && 
          <div>
            <p>{order.delivery_date}</p>
            <p>{order.order_date}</p>

            <h3>Order Status:</h3>
            <p>{orderStatus.message}</p>
            <ProgressBar variant={orderStatus.variant} now={orderStatus.value} />

          </div>
        }
      </div>

    </Container>
  )
}

export default TrackOrder
```

**Manage Order History (Bonus): Create a component that allows customers to access their order history, listing all previous orders placed. Each order entry should provide comprehensive information, including the order date and associated products.**

# ==<u>TODO:</u>==

**Cancel Order (Bonus): Implement an order cancellation feature, allowing customers to cancel an order if it hasn't been shipped or completed. Ensure that canceled orders are appropriately reflected in the system.**

# ==<u>TODO:</u>==

**Calculate Order Total Price (Bonus): Include a component that calculates the total price of items in a specific order, considering the prices of the products included in the order. This calculation should be specific to each customer and each order, providing accurate pricing information.**

### Component Creation and Organization:

**Create either functional or class components to build the user interface of the e-commerce application.**

**Organize components into a logical folder structure for better code organization and maintainability.**

**Use React hooks such as ==useState==, ==useEffect==, and ==useContext== as appropriate to manage component state and side effects.**

### Routing and Navigation:

**Implement routing using React Router to create routes for different sections and pages of the application.**

**Define route paths and components to be rendered when specific URLs are accessed.**

**Use navigation links or buttons to allow users to navigate between different parts of the application.**

### Forms and Form Handling:

**Develop forms using React components to capture user inputs for creating, updating, or interacting with customer data, product data, and orders.**

**Implement form validation to ensure that user inputs meet specified criteria, such as required fields, proper formatting, and validation messages.**

**Utilize React state and hooks to manage form data and user input changes.**

**Implement form submission handlers to send data to the backend API for processing.**

### Event Handling:

**Set up event handlers to respond to user interactions and events within the application.**

**Implement event listeners for actions like button clicks, form submissions, and user interactions with UI elements.**

**Use event handling to trigger actions like submitting forms, deleting records, and updating data.**

### Integration with React-Bootstrap:

**Incorporate React-Bootstrap components and utilities to enhance the user interface of the application.**

**Use React-Bootstrap components such as buttons, forms, modals, alerts, and navigation elements to improve the visual design and functionality.**

**Apply Bootstrap styles and CSS classes to achieve a visually appealing and responsive layout.**

### Error Handling:

**Implement error handling mechanisms to gracefully handle errors that may occur during data retrieval, form submission, or API interactions.**

**Display informative error messages to users when errors occur, helping them understand the nature of the issue and how to resolve it.**

**Use try-catch blocks or error-handling functions to capture and manage exceptions and errors.**

### GitHub Repository:

**Create a GitHub repository for the project and commit code regularly.**

**Maintain a clean and interactive README.md file in the GitHub repository, providing clear instructions on how to run the application and explanations of its features.**

**Include a link to the GitHub repository in the project documentation.**

![Celebration](https://i.pinimg.com/736x/4b/3a/51/4b3a51a6dff99dec5754000a2afab3d0.jpg)
