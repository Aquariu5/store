import { Container, Row, Col, Spinner, Pagination } from "react-bootstrap";
import Brands from '../Brands';
import Devices from '../Devices';
import Suggestions from "../Suggestions";
import Types from "../Types";
import { observer } from "mobx-react-lite";

import useDevices from "../../hooks/useDevices";
import { useEffect, useState } from "react";
import deviceModel from "../../models/devices";
const Shop = observer(() => {

    const {devices, error, loading} = useDevices();
    const [filteredDevices, setFilteredDevices] = useState([]);
    const [page, setPage] = useState(1);

    const [allPages, setAllpages] = useState([1,2,3]);
    console.log('page', deviceModel.page);
    // useEffect(() => {
    //     if (!loading) {
    //         setFilteredDevices(devices);
    //         setAllpages(Array(3).fill(1).map((el, idx) => idx + 1));
    //     }
    // }, [loading, deviceModel.page, deviceModel.type, deviceModel.brand])

    return <Container>
            <Row>
                <Types/>
            </Row>
            <Row>
                <Suggestions/>
            </Row>
            <Row>
                <Col md={3}>
                    <Brands/>
                </Col>
                <Col md={9}>
                    {
                        loading
                        ? <Spinner animation="border"/>
                        : <Devices devices={devices}/>
                    }
                    <Pagination className="mt-4">
                    {
                        allPages.map((el: number) => <Pagination.Item onClick={() => deviceModel.setPage(el)} key={el}>{el}</Pagination.Item>)
                    }
                </Pagination>
                </Col>
            </Row>
    </Container>
})

export default Shop;