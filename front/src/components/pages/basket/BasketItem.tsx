import { useEffect, useState } from "react";
import { Col, Image, Card, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_PATH_WO_ID } from "../../router/paths";
import devices from "../../../models/devices";
// import getBrand from '../utils/getBrandName';
import {IDevice} from '../../../interfaces/device';
import { IBasketDevice } from "../../../interfaces/basket";

interface DeviceItemProps {
    basket: IBasketDevice
}

const BasketItem = ({basket}: DeviceItemProps) => {

    const history = useNavigate();
    
    const img = `${process.env.REACT_APP_BACK_SITE}/${basket.device.img}`;
    const [brand, setBrand] = useState("Brand");
    const openDevice = (id: number) => {
        history(`${DEVICE_PATH_WO_ID}${basket.device.id}`)
    }
    // useEffect(() => {
    //     getBrand(device.brandId)
    //     .then(res => setBrand(res));
    // })
    return (
        <Card className="p-2">
            <Row>
                <Col md={6} className="p-4 m-auto">

                        <div>
                            <Image width={150} height={150} src={img}/>
                        </div>
                        <div className="me-auto p-2">
                            {basket.device.brand.name} {basket.device.name}
                        </div>
                        <h3 className="me-auto p-2">{basket.device.price} ₽</h3>

                </Col>
                <Col md={4} className="m-auto">
                    <Button variant={'outline-danger'}>Оформить заказ</Button>
                    <div className="mt-4">
                    Количество: {basket.amount} <Button>+</Button> <Button>-</Button>
                    </div>
                </Col>
            </Row>
            </Card>
        )
}

export default BasketItem