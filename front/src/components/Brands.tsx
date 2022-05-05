import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Button, Container, Col, Row, Card, Spinner } from "react-bootstrap";
import { getBrands } from "../api/apiBrands";
import useBrands from "../hooks/useBrands";

//import useSWR from "swr";

import device from '../models/devices';

//import getFetcher from "../api/fetchers/getFetcher";



const Brands = observer(() => {
    
    const [border, setBorder] = useState<number | null>(0);

    
    const {brands, errorBrands, loadingBrands} = useBrands();
    // useEffect(() => {
    //     console.log('databrands', data);
    // },[data]);

    // useEffect(() => {
    //     const get = async() => {
    //         const res = await getBrands();
    //         device.setBrands(res);
    //     }   
    //     get();
    // }, []);


    const selectBrand = (id: number| null) => {
        device.setBrand(id);
        setBorder(id)
    }

    return (
            <Col className="mt-3" style={{marginLeft: '20px'}}>
                <h3 className="d-flex">Популярные бренды</h3>
                <Col md={10}>
                    <Card
                        className="p-2 " 
                        style={{
                            cursor: 'pointer',
                            border: device.brand === null ?  '2px solid black' : '',
                            backgroundColor: '#FEF'
                        }}
                        onClick={() => selectBrand(null)}
                        
                    >{'Все'}
                    </Card>
                    {
                        loadingBrands
                        ? 
                            <Spinner animation="border"/>
                        : 
                            brands.map((el:any) => <Card
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