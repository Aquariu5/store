import { useCallback, useState } from "react";
import { Container, Image, Row, Col, Button, Spinner } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import {addInBasket} from '../../api/apiBasket';
import { observer } from "mobx-react-lite";
// import getBrandName from "../../utils/getBrandName";
import user from "../../models/user";
import basket from "../../models/basket";
import { IChars } from "../../interfaces/chars";
import usePageDevice from "../../hooks/usePageDevice";
const DevicePage = observer(() => {
    const {id} = useParams();
    const [url, setUrl] = useState<string>('');
    //const [device, setDevice] = useState<IDevice>();
    const [descArr, setDescArr] = useState<IChars[]>([])

    const {device, errorDevice, loadingDevice} = usePageDevice(id);

    const add = useCallback(() => {
        //console.log('id, device', id, device);
        if (id && device) {
            //console.log('condition true');
            addInBasket(user.id, +id)
            .then(res => {
                //console.log('resssssss', res);
                if (res.length === 1 && res[0] === 1) { // update
                    basket.updateAmount(+id, user.id);
                }
                else {
                    const obj = {
                        basketId: user.id,
                        deviceId: +id,
                        amount: 1,
                        device
                    }
                    basket.addDeviceId(obj);
                }
            })
        }
        
    }, [id, device]);

    return <Container className="AutoHeight">
            {
            loadingDevice 
            ? <Spinner animation="border"/>
            :
            <Row>
                <Col md={4} className="mt-5">
                    <Image width={400} height={300} src={`${process.env.REACT_APP_BACK_SITE}/${device.img}`}/>
                </Col>
                <Col md={4}  className="m-auto">
                    {
                        (device ?
                        <h1>
                            {
                                `${device.brand.name} ${device?.name}`
                            }
                        </h1>
                        :
                        <div>Ждите...</div>
                        )
                        
                    }
                    <div>
                    {
                        device.device_char
                        ? JSON.parse(device.device_char.description).map((desc: IChars) => <p key={desc.id}>{desc.title}: {desc.description}</p>)
                        : <></>
                        
                    }
                    </div>
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
    }
    </Container>
})

export default DevicePage;