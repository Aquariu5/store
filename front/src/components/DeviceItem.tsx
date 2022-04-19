import { useState } from "react";
import { Col, Image, Card } from "react-bootstrap";
import {IDevice} from './Devices'
interface DeviceItemProps {
    device: IDevice
}
const DeviceItem = ({device}: DeviceItemProps) => {

    const [state,setState] = useState('');
    return (
            <Card className="mt-4">
                <div>
                    <Image width={150} height={150} src="http://localhost:7000/24a13ad6-524c-4fa0-becc-f69fcbb621ad.jpg"/>
                </div>
                <div className="me-auto p-2">
                    {device.name}
                </div>
                <h3 className="me-auto p-2">{device.price} ₽</h3>
            </Card>
        )
}

export default DeviceItem