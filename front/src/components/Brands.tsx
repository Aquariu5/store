import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Button, Container, Col, Row, Card } from "react-bootstrap";
import { getBrands } from "../api/apiDevices";

import device from '../models/devices';



const Brands = observer(() => {
    
    const [border, setBorder] = useState(0);
    useEffect(() => {
        const get = async() => {
            const res = await getBrands();
            device.setBrands(res);
        }   
        get();
    }, []);


    // const types = [
    //     {id: 1, name: 'samsung'},
    //     {id: 2, name: 'apple'},
    //     {id: 3, name: 'xiaomi'},
    //     {id: 4, name: 'atlant'},
    // ]

    const selectBrand = (id: number) => {
        device.setBrand(id);
        
        setBorder(id)
    }

    const [state,setState] = useState('');
    return (
            <Col className="mt-3" style={{marginLeft: '20px'}}>
                <h3 className="d-flex">Популярные бренды</h3>
                <Col md={10}>
                    {
                device.brands.map(el => <Card
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