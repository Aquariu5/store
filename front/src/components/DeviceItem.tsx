import { Image, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DEVICE_PATH_WO_ID } from './router/paths';
// import getBrand from '../utils/getBrandName';
import { IDevice } from '../interfaces/device';

interface DeviceItemProps {
    device: IDevice
}

function DeviceItem({ device }: DeviceItemProps) {
  const history = useNavigate();

  const img = `${process.env.REACT_APP_BACK_SITE}/${device.img}`;
  const openDevice = (id: number) => {
    history(`${DEVICE_PATH_WO_ID}${device.id}`);
  };
  return (
    <Card
      className="mt-4"
      style={{ cursor: 'pointer' }}
      onClick={() => openDevice(device.id)}
    >
      <div>
        <Image width={150} height={150} src={img} />
      </div>
      <div className="me-auto p-2">
        {device.brand.name}
        {' '}
        {device.name}
      </div>
      <h3 className="me-auto p-2">
        {device.price}
        {' '}
        ₽
      </h3>
    </Card>
  );
}

export default DeviceItem;
