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

export function BossMeetingPrompt() {
    return (
        <Prompt text="Boss says they need to meet with you. Something about ____________" />
    )
}

export function LostInternPrompt() {
    return (
        <Prompt text="We just lost our intern, ____________" />
    )
}

export function LegalPrompt() {
    return (
        <Prompt text="Uh, Legal said they needed ____________ by next week" />
    )
}

export function RetroPrompt() {
    return (
        <Prompt text="Your next retrospective will be caused by ____________" />
    )
}
