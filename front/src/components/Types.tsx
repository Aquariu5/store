import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import {Col, Card, Spinner } from "react-bootstrap";
import { getTypes} from "../api/apiTypes";
import useTypes from "../hooks/useTypes";
import { IType } from "../interfaces/device";
import device from '../models/devices';




const Types = observer(() => {
    const [selected, setSelected] = useState<number>(0);

    const selectType = (id: number) => {
        setSelected(id)
        device.setType(id);
    }

    const {types, errorTypes, loadingTypes} = useTypes();
    console.log('type', device.type);
    // useEffect(() => {
    //     const get = async () => {
    //         const res = await getTypes();
    //         console.log('types', res);
    //         device.setTypes(res);
    //     }
    //     get();
    // }, [])
    return (
                <Col md={6} className="d-flex">
                    <Card 
                    className="p-2"
                    style={{
                        width: '150px',
                        cursor: 'pointer',
                        border: 0 === selected ? '2px solid black' : '',
                        backgroundColor: '#FEF'
                    }}
                    onClick={() => selectType(0)}
                    
                    >{'Все'}</Card>
                {
                    loadingTypes ? <Spinner animation="border"/>
                :
                types.map((el: IType) => <Card 
                    className="p-2"
                    key={el.id}
                    style={{width: '200px', cursor: 'pointer', border: el.id === selected ? '2px solid black' : ''}}
                    onClick={() => selectType(el.id)}
                    >{el.name}</Card>)
                    }
                </Col>
            
        
    )
})

export default Types;