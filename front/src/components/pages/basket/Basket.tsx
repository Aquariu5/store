import {Container, Row } from "react-bootstrap";
import user from "../../../models/user";
import basketModel from "../../../models/basket";
import { observer } from "mobx-react-lite";
import BasketItem from "./BasketItem";
const Basket = observer(() => {
    //style={{height: (window.innerHeight - 136)}}
    return <Container className="AutoHeight">
        <Row>
            <h3 className="m-4">{user.email} в вашей корзине {basketModel.devices.length} товаров</h3>
        </Row>
            {
                basketModel.devices.map(dev => <BasketItem key={dev.deviceId} basket={dev}/>)
            }

    </Container>
})

export default Basket;