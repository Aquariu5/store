import { CacheProvider } from "@emotion/react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Brands from './Brands';
import Devices from './Devices';
import Suggestions from "./Suggestions";
import Types from "./Types";
const Shop = () => {

    const [state,setState] = useState('');
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
                    <Devices/>
                </Col>
            </Row>
    </Container>
}

export default Shop;