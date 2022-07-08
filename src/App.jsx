import { useState } from 'react'
import './App.css'
import Adlib, { CacheMeOutsideCard, CurlBashCard, DNSCard } from './components/Adlib'
import Prompt from './components/Prompt'

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Header from './components/Header'


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
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">The prompt</h1>
        <Prompt />
      </Container>

      <div className="hand">
        <CacheMeOutsideCard />
        <CurlBashCard />
        <DNSCard />
        <CurlBashCard />
        <CacheMeOutsideCard />
      </div>


    </main>

  </Container>
);

export default App
