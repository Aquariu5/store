import {Container,Row, Col} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import { observer } from "mobx-react-lite";
import device from "../models/devices";
import { IDevice } from "../interfaces/device";

interface DevicesProps {
    devices: IDevice[]
}

const Devices = observer(({devices}: DevicesProps) => {
    console.log('devicepop', devices);
    return (
            <Container>
                <Row className="d-flex mt-2">
                {
                    devices && devices.length !== 0 ? devices.map(el => <Col 
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