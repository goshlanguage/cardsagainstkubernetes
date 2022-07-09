import { useState } from 'react'
import './App.css'
import { CacheMeOutsideCard, CurlBashCard, DNSCard, OPACard, WrongContextCard } from './components/Adlib'
import { RetroPrompt } from './components/Prompt'
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

const App = () => (
  <Container className="py-3">
    <Header />
    <main>
      <Container className="p-3 prompt-banner bg-light rounded-3">
        <div className="row mb-3 text-center">
          <RetroPrompt />
          <DefaultCard />
          <DefaultCard />
        </div>
        <h1 className="header fw-muted">The prompt</h1>
      </Container>

      <div className="hand">
        <Row className="mb-3 text-center">
          <CacheMeOutsideCard />
          <CurlBashCard />
          <DNSCard />
          <WrongContextCard />
          <OPACard />
        </Row>
      </div>

      <div>

      </div>
    </main>

  </Container>
);

export default App
