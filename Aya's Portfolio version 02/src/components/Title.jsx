import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Title = ({ children }) => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col xs="auto" >
                    <h1 className="title"> {children}</h1>
                </Col>
                <Col xs="6">
                    <hr className='title-separator' />
                </Col>
            </Row>
        </Container>
    )
}

export default Title
