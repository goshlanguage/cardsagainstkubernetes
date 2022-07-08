import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';


function Adlib() {
    return (
        <Card className="Adlib-cards" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="cardTitle">DNS</Card.Title>
                <Card.Text className="cardText">
                    It's always DNS.
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Adlib;

export function DNSCard() {
    return (
        <div className="row mb-3 text-center">
            <Col>
                <div className="card mb-4 rounded-3 shadow-sm Adlib-cards">
                    <div className="card-body">
                        <h1 className="card-title">It's always <small className="text-muted fw-light">DNS</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>It's not DNS</li>
                            <li>There's no way its DNS</li>
                            <li>It was DNS</li>
                        </ul>
                    </div>
                </div>
            </Col>
        </div>
    )
}

export function CacheCheckCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    Did you clear the cache?
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export function CacheMeOutsideCard() {
    return (
        <div className="row mb-3 text-center">
            <Col>
                <div className="card mb-4 rounded-3 shadow-sm Adlib-cards">
                    <div className="card-body">
                        <h1 className="card-title">Cache <small className="text-muted fw-light">me</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Outside</li>
                        </ul>
                    </div>
                </div>
            </Col>
        </div>
    )
}

export function CurlBashCard() {
    return (
        <div className="row mb-3 text-center">
            <Col>
                <div className="card mb-4 rounded-3 shadow-sm Adlib-cards">
                    <div className="card-body">
                        <h1 className="card-title">curl <small className="text-muted fw-light">| bash</small></h1>
                        <p>
                            Straight from StackOverflow
                        </p>
                    </div>
                </div>
            </Col>
        </div>
    )
}
