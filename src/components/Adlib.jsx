import { useState } from 'react'
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade'

function Adlib(props) {
    const [open, setOpen] = useState(true);

    let listItems = ""

    if (props !== undefined && props.lines !== undefined) {
        listItems = props.lines.map((item) => <li key={item}>{item}</li>);
    }

    // if there is a title and text, lets add a line break to break up the card a little
    // if there is a title and or title text, the title break being a space will appropriately typeset the 
    // card. If there is title and text, we should line break. If there is only text, we should have no spacing.
    let title_break = " ";
    if (props.text != undefined && props.title != undefined) {
        title_break = <br />;
    }
    if (props.text != "" && props.title === undefined && props.titlealt === undefined) {
        title_break = "";
    }

    return (
        <Col>
            <Fade in={open}>
                <Card className="Adlib-cards rounded-3 shadow-sm" onClick={() => setOpen(!open)} >
                    <Card.Body>
                        <Card.Text>
                            {props.title} <span className="text-muted fw-light">{props.titlealt}</span>
                            {title_break}
                            {props.text}
                        </Card.Text>
                            <ul className="list-unstyled mt-3">
                            <small>
                                {listItems}
                            </small>
                        </ul>
                    </Card.Body>
                </Card>
            </Fade>
        </Col >
    )
}

export default Adlib;

export function DNSCard() {
    let lines = [
        "It's not DNS",
        "There's no way its DNS",
        "It was DNS",
    ];

    return (
        <Adlib title="It's always" titlealt="DNS" lines={lines} />
    )
}

export function AccidentalDDOSCard() {
    return (
        <Adlib text="accidentally DDOSing yourself" />
    )
}

export function CacheCheckCard() {
    return (
        <Adlib title="Did you clear your cache?!" />
    )
}

export function CacheMeOutsideCard() {
    return (
        <Adlib title="Cache" titlealt="me" text="Outside" />
    )
}

export function CurlBashCard() {
    return (
        <Adlib title="curl" titlealt="| bash" text="Straight from StackOverflow" />
    )
}

export function OPACard() {
    return (
        <Adlib title="OPA!" />
    )
}

export function SoxAuditCard() {
    return (
        <Adlib text="a last minute sox audit" />
    )
}

export function TooManyLogsCard() {
    return (
        <Adlib text="too many logs" />
    )
}

export function WrongContextCard() {
    return (
        <Adlib title="Oops" titlealt="!" text="Wrong Kube Context" />
    )
}