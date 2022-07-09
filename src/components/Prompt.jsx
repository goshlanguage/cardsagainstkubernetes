import Col from 'react-bootstrap/Col';

function Prompt(props) {
    return (
        <Col md="3">
            <div className="rounded-3 shadow-sm Prompt-cards">
                <div className="card-body">
                    <h1 className="card-title">
                        {props.title}
                    </h1>
                    <ul className="list-unstyled mt-3">
                        <li>{props.text}</li>
                    </ul>
                </div>
            </div>
        </Col>
    )
}

export default Prompt;

export function RetroPrompt() {
    return (
        <Prompt text="Your next retrospective will be caused by ____________" />
    )
}
