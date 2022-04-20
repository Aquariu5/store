import { useState } from "react";
import { Col, Image, Card } from "react-bootstrap";
import {IDevice} from './Devices'
interface DeviceItemProps {
    device: IDevice
}
const DeviceItem = ({device}: DeviceItemProps) => {

    const [state,setState] = useState('');
    const img = `http://localhost:7000/${device.img}`;

    

    return (
            <Card className="mt-4"
                
            >
                <div>
                    <Image width={150} height={150} src={img}/>
                </div>
                <div className="me-auto p-2">
                    {device.name}
                </div>
                <h3 className="me-auto p-2">{device.price} ₽</h3>
            </Card>
        )
}

export default DeviceItem