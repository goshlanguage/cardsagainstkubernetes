import { Card } from 'react-bootstrap';

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
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>DNS</Card.Title>
                <Card.Text>
                    It's always DNS.
                </Card.Text>

            </Card.Body>
        </Card>
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
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    Cache me outside.
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export function CurlBashCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    curl bash straight from StackOverflow
                </Card.Text>

            </Card.Body>
        </Card>
    )
}
