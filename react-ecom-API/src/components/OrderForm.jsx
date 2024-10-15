import { useState } from 'react'
import axios from 'axios'
import { Alert, Button, Container, Form, Modal } from 'react-bootstrap'


//  TODO: make order form functional!

const OrderForm = () => {

  // order Variables
  const [productName, setProductName] = useState('')
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

    const order = {
      "productName": productName, 
      "customerId": customerId, 
      "orderDate": orderDate,
      "deliveryDate": deliveryDate
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
      setModalName(order)

      // Reset the form 
      setProductName('')
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
    if (!productName) errors.productName = "Product name is required"
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
        <Form.Group controlId='formGroupProductName'>
          {/* Replace label, input with Form.Label and Form.Control */}
          <Form.Label>Product Name:</Form.Label>
          <Form.Control type='text' value={productName} onChange={(e) => setProductName(e.target.value) }/>
          { errors?.productName && <Alert variant='danger'>{errors.productName}</Alert> }
        </Form.Group>

        <br />

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
            <p>{modalName} created successfully!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='danger' onClick={() => setShowSuccessModal(false)}>Close</Button>
          </Modal.Footer>
       </Modal>
       

    </Container>
  )
}

export default OrderForm