import { useState } from "react";
import { Button, Container, Col, Row, Card } from "react-bootstrap";

const Brands = () => {
    
    const types = [
        {id: 1, name: 'samsung'},
        {id: 2, name: 'apple'},
        {id: 3, name: 'xiaomi'},
        {id: 4, name: 'atlant'},
    ]
    const [state,setState] = useState('');
    return (
            <Col className="mt-3" style={{marginLeft: '20px'}}>
                <h3 className="d-flex">Популярные бренды</h3>
                <Col md={10}>
                    {
                types.map(el => <Card 
                    className="p-2 " 
                    style={{cursor: 'pointer'}}
                    
                    >{el.name}</Card>)
                    }
                </Col>

            </Col>
            
    )
}

export default Brands;