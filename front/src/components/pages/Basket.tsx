import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getBasketById } from "../../api/apiBasket";
import { getUserId } from "../../api/apiUser";
import {getDeviceById} from "../../api/apiDevices";
import { IBasket } from "../../interfaces/basket";
import user from "../../models/user";
import basket from "../../models/basket";
import { observer } from "mobx-react-lite";
import BasketItem from "./basket/BasketItem";
const Basket = observer(() => {
    // const [basket, setBasket] = useState<IBasket[]>([]);
    const [amount, setAmount] = useState<number>(0);

    // useEffect(() => {

    // }, [basket.devices.length])

    const [state,setState] = useState('');
    return <Container>
        <Row>
            <h3>{user.email} в вашей корзине {basket.devices.length} товаров</h3>
        </Row>
            {
                basket.devices.map(dev => <BasketItem key={dev.deviceId} basket={dev}/>)
            }

    </Container>
})

export default Basket;