import { useState } from "react";
import { Button, Container, Col, Row, Card } from "react-bootstrap";

const Types = () => {
    
    const types = [
        {id: 1, name: 'kholodos'},
        {id: 2, name: 'smarts'},
        {id: 3, name: 'itd'},
        {id: 4, name: 'itp'},
    ]
    const [state, setState] = useState('');
    return (
                <Col md={6} className="d-flex">
                {
                types.map(el => <Card 
                    className="p-2" 
                    style={{width: '150px', cursor: 'pointer'}}
                    
                    >{el.name}</Card>)
                    }
                </Col>
            
        
    )
}

export default Types;