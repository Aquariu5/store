import { useContext, useEffect, useState } from "react";
import {Container,Row, Col} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import { getDevices } from "../api/apiDevices";
import { observer } from "mobx-react-lite";
import device from "../models/devices";

const Devices = observer(() => {

    return (
            <Container>
                <Row className="d-flex mt-2">
                {
                    device.devices.length !== 0 ? device.devices.map(el => <Col 
                        md={3}
                        key={el.id}
                    >
                    <DeviceItem device={el}
                    />
                    </Col>)
                    :
                    <div>Ждите...</div>
                }
                </Row>
            </Container>
    )

})

export default Devices;