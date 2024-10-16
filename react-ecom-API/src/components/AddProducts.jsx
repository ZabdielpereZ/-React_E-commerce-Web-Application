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