import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Prompt(props) {
    let listItems = ""

    if (props !== undefined && props.lines !== undefined) {
        listItems = props.lines.map((item) => <li key={item}>{item}</li>);
    }

    return (
        <Col md="3">
            <Card className="Prompt-cards rounded-3 shadow-sm">
                <Card.Body>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    <ul className="list-unstyled mt-3">
                        <small>
                            {listItems}
                        </small>
                    </ul>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Prompt;
