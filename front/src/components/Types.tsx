import { useEffect, useState } from "react";
import { Button, Container, Col, Row, Card } from "react-bootstrap";
import { getTypes } from "../api/apiDevices";

interface IType {
    id: number,
    name: string
}


const Types = () => {
    
    const [types, setTypes] = useState<IType[]>([]);

    
    useEffect(() => {
        const get = async () => {
            const res = await getTypes();
            console.log('types', res);
            setTypes(res);
        }
        get();
    }, [types.length])
    return (
                <Col md={6} className="d-flex">
                {
                types.length == 0 ? <div>Ждите...</div>
                :
                types.map(el => <Card 
                    className="p-2"
                    key={el.id}
                    style={{width: '150px', cursor: 'pointer'}}
                    
                    >{el.name}</Card>)
                    }
                </Col>
            
        
    )
}

export default Types;