import { useCallback, useEffect, useState } from "react";
import { Container, Image, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getDeviceById } from "../../api/apiDevices";
import {addInBasket} from '../../api/apiBasket';
import { IDevice } from "../../interfaces/device";
// import getBrandName from "../../utils/getBrandName";
import user from "../../models/user";
import basket from "../../models/basket";
const DevicePage = () => {
    const {id} = useParams();
    const [url, setUrl] = useState<string>('');
    const [device, setDevice] = useState<IDevice>();
    console.log('devicepage', device);
    useEffect(() => {
        if (id) {
            getDeviceById(+id)
            .then(res => {
                setDevice(res);
                setUrl(`${process.env.REACT_APP_BACK_SITE}/${res.img}`)
            })
        }
    }, []);
    
    const add = useCallback(() => {
        if (id && device) {
            addInBasket(user.id, +id)
            .then(res => {
                const obj = {
                    basketId: user.id,
                    deviceId: +id,
                    amount: 1,
                    device
                }
                basket.addDeviceId(obj);
            })
        }
        
    }, []);
    return <Container>
        <Row className="mt-5">
            <Col md={4}>
                <Image width={400} height={300} src={url}/>
            </Col>
            <Col md={4}  className="m-auto">
                {
                    (device ?
                    <h1>
                        {
                            device.brand.name
                        }
                    </h1>
                    :
                    <div>Ждите...</div>
                    )
                }
                <div>Лучший в своей категории</div>
            </Col>
            <Col md={2}
                className="m-auto"
                style={{cursor: 'pointer'}}
            >
                <h2>
                    {device?.price} ₽
                </h2>
                <Button variant={'outline-success'} className="p-2" onClick={add}>
                    Добавить в корзину
                </Button>
            </Col>
        </Row>
    </Container>
}

export default DevicePage;