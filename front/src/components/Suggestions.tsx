import { Col, Container, Row } from "react-bootstrap";
import Slider from "./Slider";
const Suggestions = () => {

    return <Container className="mt-3">
        <Row>
            <Col md={6}>
                <Slider/>
            </Col>
            <Col md={6}>
                <Slider/>
            </Col>
        </Row>
    </Container>
}

export default Suggestions;