import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Button, Container, Col, Row, Card } from "react-bootstrap";
import { getBrands } from "../api/apiDevices";
import devices from '../models/devices';

interface IType {
    id: number,
    name: string
}

const Brands = observer(() => {
    
    const [types, setTypes] = useState<IType[]>([]);
    const [border, setBorder] = useState(0);
    useEffect(() => {
        const get = async() => {
            const res = await getBrands();
            setTypes(res);
        }   
        get();
    }, [types.length]);


    // const types = [
    //     {id: 1, name: 'samsung'},
    //     {id: 2, name: 'apple'},
    //     {id: 3, name: 'xiaomi'},
    //     {id: 4, name: 'atlant'},
    // ]

    const selectBrand = (id: number) => {
        devices.setBrand(id);
        console.log('brand', devices.brand);
        setBorder(id)
    }

    const [state,setState] = useState('');
    return (
            <Col className="mt-3" style={{marginLeft: '20px'}}>
                <h3 className="d-flex">Популярные бренды</h3>
                <Col md={10}>
                    {
                types.map(el => <Card
                    key={el.id}
                    className="p-2 " 
                    style={{cursor: 'pointer', border: el.id === border ?  '2px solid black' : ''}}
                    onClick={() => selectBrand(el.id)}
                    
                    >{el.name}</Card>)
                    }
                </Col>

            </Col>
            
    )
})

export default Brands;