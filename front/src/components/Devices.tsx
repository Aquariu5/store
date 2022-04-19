import { useState } from "react";
import {Container,Row, Col} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

export interface IDevice {
    id: number,
    name: string,
    price: number
}
const Devices = () => {

    const devices: IDevice[] = [
        {id: 1, name: 'Xiaomi', price: 20000},
        {id: 2, name: 'Xiaomi', price: 20000},
        {id: 3, name: 'Xiaomi', price: 20000},
        {id: 4, name: 'Xiaomi', price: 20000},
        {id: 5, name: 'Xiaomi', price: 20000},
        {id: 6, name: 'Xiaomi', price: 20000},
        {id: 7, name: 'Xiaomi', price: 20000},
        {id: 8, name: 'Xiaomi', price: 20000},
        {id: 9, name: 'Xiaomi', price: 20000},
        {id: 10, name: 'Xiaomi', price: 20000},
    ]
    const [state,setState] = useState('');
    return (
            <Container>
                <Row className="d-flex mt-2">
                {
                    devices.map(el => <Col md={3}><DeviceItem device={el}/></Col>)
                }
                </Row>
            </Container>
    )

}

export default Devices;