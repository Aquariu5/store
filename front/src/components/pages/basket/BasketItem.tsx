import { useCallback, useEffect, useState } from "react";
import { Col, Image, Card, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_PATH_WO_ID } from "../../router/paths";
import { removeFromBasket } from "../../../api/apiBasket";
import basketModel from "../../../models/basket";
// import getBrand from '../utils/getBrandName';
import {IDevice} from '../../../interfaces/device';
import { IBasketDevice } from "../../../interfaces/basket";
import { observer } from "mobx-react-lite";
interface DeviceItemProps {
    basket: IBasketDevice
}

const BasketItem = observer(({basket}: DeviceItemProps) => {

    const history = useNavigate();
    
    const img = `${process.env.REACT_APP_BACK_SITE}/${basket.device.img}`;

    // useEffect(() => {
    //     getBrand(device.brandId)
    //     .then(res => setBrand(res));
    // })

    const removeItem = async () => {
        let res = await removeFromBasket(basket.basketId, basket.deviceId);
        if (res) {
            basketModel.deleteDevice(basket.basketId, basket.deviceId);
        }
    }
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
                <Col md={6} className="m-auto">
                    <div className="d-flex gap-1">
                    <Button variant={'outline-danger'}>Оформить заказ</Button>
                    <Button variant={'outline-secondary'} onClick={removeItem}>Удалить</Button>

                    </div>
                    <div className="mt-4">
                    Количество: {basket.amount} <Button>+</Button> <Button>-</Button>
                    </div>
                </Col>
            </Row>
            </Card>
        )
});

export default BasketItem