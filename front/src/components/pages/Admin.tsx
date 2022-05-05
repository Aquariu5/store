
import { Container, Row } from 'react-bootstrap';

import AddBrandForm from '../forms/AddBrandForm';
import AddTypeForm from '../forms/AddTypeForm';
import AddDeviceForm from '../forms/AddDeviceForm';
function Admin() {
  return <Container className="AutoHeight">
      <Row>
        <AddTypeForm/>
        <AddBrandForm/>
        <AddDeviceForm/>
      </Row>
  </Container>
}

export default Admin;
