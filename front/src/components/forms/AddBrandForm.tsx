import { useState } from "react";
import { Row, Col, Form, Alert, Button } from "react-bootstrap";
import useAddBrand from "../../hooks/admin/useAddBrand";
const AddBrandForm = () => {

    const {registerBrand, handleSubmitBrand, onSubmitBrand, errorsBrand, alertBrand} = useAddBrand();
    return <Col md={3}>
    <Form onSubmit={handleSubmitBrand(onSubmitBrand)}>
        <Form.Group>
          <Form.Label>Добавить бренд</Form.Label>
          <Form.Control
            {...registerBrand('brand', {required: true, minLength: 2})}
          />
          {errorsBrand.brand && <Form.Text>Заполните поле плес...</Form.Text>}
          
        </Form.Group>
        <Button variant={'outline-success'} type="submit">Добавить</Button>
      </Form>
      <Alert className='mt-4' variant={alertBrand.variant}>{alertBrand.message}</Alert>
  </Col>
}

export default AddBrandForm;