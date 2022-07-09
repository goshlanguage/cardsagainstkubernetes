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

    return (
        <Col>
            <Fade in={open}>
                <Card className="card Adlib-cards rounded-3 shadow-sm" onClick={() => setOpen(!open)} >
                    <Card.Body>
                        <Card.Title><h1>{props.title} <small className="text-muted fw-light">{props.titlealt}</small></h1></Card.Title>
                        <Card.Text>
                            {props.text}
                            <ul className="list-unstyled mt-3">
                                {listItems}
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Fade>
        </Col >
    )
}

export default Adlib;

export function OPACard() {
    return (
        <Adlib title="OPA!" />
    )
}

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

export function WrongContextCard() {
    return (
        <Adlib title="Oops" titlealt="!" text="Wrong Kube Context" />
    )
}