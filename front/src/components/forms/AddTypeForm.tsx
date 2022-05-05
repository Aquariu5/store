import { useState } from "react";
import { Row, Col, Form, Alert, Button } from "react-bootstrap";
import useAddType from "../../hooks/admin/useAddType";
const AddTypeForm = () => {

    const {registerType, handleSubmitType, onSubmitType, errorsType, alertType} = useAddType();

    return <Col md={3}>
    <Form onSubmit={handleSubmitType(onSubmitType)}>
      <Form.Group>
        <Form.Label>Добавить тип</Form.Label>
        <Form.Control
          {...registerType('type', {required: true, minLength: 3})}
        />
        {errorsType.type && <Form.Text>Заполните поле плес...</Form.Text>}
      </Form.Group>
      <Button variant={'outline-success'} type="submit">Добавить</Button>
    </Form>
    <Alert className='mt-4' variant={alertType.variant}>{alertType.message}</Alert>
  </Col>
}

export default AddTypeForm;