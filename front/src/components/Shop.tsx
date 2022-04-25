import { CacheProvider } from "@emotion/react";
import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Brands from './Brands';
import Devices from './Devices';
import Suggestions from "./Suggestions";
import Types from "./Types";
import { observer } from "mobx-react-lite";

import { getDevices } from "../api/apiDevices";

import device from "../models/devices";
const Shop = observer(() => {

    const [state,setState] = useState('');

    // обычный запрос для всех устройств
    useEffect(() => {
        getDevices()
        .then(res => {device.setDevices(res.rows)});
    }
    , []);

    // запрос для устойств по фильтру
    useEffect(() => {
        getDevices(device.brand, device.type)
        .then(res => {device.setDevices(res.rows)});
    }
    , [device.brand, device.type]);



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
})

export default Shop;