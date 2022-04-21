import { observer } from "mobx-react-lite";
import { useEffect, useState, useContext } from "react";
import { Button, Container, Col, Row, Card } from "react-bootstrap";
import { getTypes } from "../api/apiDevices";
import device from '../models/devices';

interface IType {
    id: number,
    name: string
}


const Types = observer(() => {
    const [types, setTypes] = useState<IType[]>([]);
    const [selected, setSelected] = useState<number>(0);
    const selectType = (id: number) => {
        setSelected(id)
        device.setType(id);
    }
    console.log('type', device.type);
    useEffect(() => {
        const get = async () => {
            const res = await getTypes();
            console.log('types', res);
            setTypes(res);
        }
        get();
    }, [])
    return (
                <Col md={6} className="d-flex">
                {
                types.length == 0 ? <div>Ждите...</div>
                :
                types.map(el => <Card 
                    className="p-2"
                    key={el.id}
                    style={{width: '150px', cursor: 'pointer', border: el.id === selected ? '2px solid black' : ''}}
                    onClick={() => selectType(el.id)}
                    >{el.name}</Card>)
                    }
                </Col>
            
        
    )
})

export default Types;