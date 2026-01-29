import React from 'react';
import { Card, Col } from 'react-bootstrap';

function Answer(props) {
  let listItems = "";

  if (props.lines) {
    listItems = props.lines.map((item) => <li key={item}>{item}</li>);
  }

  const getCardClasses = () => {
    let classes = 'Answer-cards rounded-3 shadow-sm';

    // A card is "raised" if it's selected (before or after submission),
    // or if it's the correct answer after submission.
    if (props.isSelected || (props.isSubmitted && props.isActuallyCorrect)) {
      classes += ' selected-card';
    }

    // After submission, apply correct/wrong styling.
    if (props.isSubmitted) {
      if (props.isActuallyCorrect) {
        classes += ' correct';
      } else if (props.isSelected) { // This is the wrong card (if isActuallyCorrect is false)
        classes += ' wrong';
      }
    }
    return classes;
  };
  
  // After submission, show title for the selected card AND the correct card.
  const showTitle = props.isSubmitted && (props.isSelected || props.isActuallyCorrect);

  // After submission, fade out cards that were neither selected nor correct.
  const fadeOut = props.isSubmitted && !props.isSelected && !props.isActuallyCorrect;

  return (
    <Col className={fadeOut ? 'fade-out' : ''}>
      <Card className={getCardClasses()} onClick={props.onSelect}>
        <Card.Body className="p-4">
          {showTitle && (
            <Card.Text>
              {props.title}{' '}
              <span className="text-muted fw-light">{props.titlealt}</span>
            </Card.Text>
          )}
          <ul className="list-unstyled mt-3">
            <small>{listItems}</small>
          </ul>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Answer;