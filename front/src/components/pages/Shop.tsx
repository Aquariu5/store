import { Container, Row, Col, Spinner } from "react-bootstrap";
import Brands from '../Brands';
import Devices from '../Devices';
import Suggestions from "../Suggestions";
import Types from "../Types";
import { observer } from "mobx-react-lite";

import useDevices from "../../hooks/useDevices";

const Shop = observer(() => {

    const {devices, error, loading} = useDevices();
    return <Container>
            <Row>
                <Types/>
            </Row>
            <Row>
                <Suggestions/>
            </Row>
            <Row>
                <Col md={3}>
                    <Brands/>
                </Col>
                <Col md={9}>
                    {
                        loading
                        ? <Spinner animation="border"/>
                        : <Devices devices={devices}/>
                    }
                    
                </Col>
            </Row>
    </Container>
})

export default Shop;