import React, { useState } from 'react'
import './App.css'
import { AccidentalDDOSCard, CacheMeOutsideCard, CurlBashCard, DNSCard, OPACard, SoxAuditCard, TooManyLogsCard, WrongContextCard } from './components/Adlib'
import { BossMeetingPrompt, LegalPrompt, LostInternPrompt, RetroPrompt } from './components/Prompt'
import DefaultCard from './components/DefaultCard'

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Header from './components/Header'
import Row from 'react-bootstrap/Row'


const Hand = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Hand</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Hide Hand</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

function App() {
  // create prompt deck then shuffle it
  let PromptDeck = [BossMeetingPrompt, LostInternPrompt, LegalPrompt, RetroPrompt];
  shuffle(PromptDeck);

  let promptRendered = React.createElement(PromptDeck.pop());


  // Create adlib deck, then draw for the user
  let AdlibDeck = [AccidentalDDOSCard, CacheMeOutsideCard, CurlBashCard, DNSCard, OPACard, SoxAuditCard, TooManyLogsCard, WrongContextCard];
  shuffle(AdlibDeck);

  let playerHand = AdlibDeck.slice(AdlibDeck.length - 5);

  let playerHandRendered = [];

  playerHand.forEach((x, key) => {
    playerHandRendered.push(React.createElement(x, { key: key }));
  })

  return (
    <Container className="py-3">
      <Header />
      <main>
        <Container className="p-3 prompt-banner bg-light rounded-3">
          <Row className="row mb-3">
            {promptRendered}
            <DefaultCard />
            <DefaultCard />
          </Row>
          <h1 className="header fw-muted">The prompt</h1>
        </Container>

        <Container className="p-3 prompt-banner bg-light rounded-3">
          <Hand>
            <Row>
              {playerHandRendered}
            </Row>
          </Hand>
        </Container>
      </main>
    </Container>
  )
}

// unbiased shuffle algorithm (Fisher-Yates aka Knuth shuffle)
//    https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default App
