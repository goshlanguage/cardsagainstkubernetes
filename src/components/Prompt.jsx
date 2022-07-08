import { Card } from 'react-bootstrap';

function Prompt() {
    return (
        <Card className="Prompt-cards" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="cardTitle"></Card.Title>
                <Card.Text className="cardText">
                    Your next retrospective will be caused by ____________
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Prompt;
