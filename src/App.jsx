import React, { useState, useEffect } from 'react';
import './App.css';
import { ROUNDS } from './gameData'; // Import the new data structure
import Answer from './components/Answer'; // Import the generic Answer component
import Prompt from './components/Prompt'; // Import the generic Prompt component

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Header from './components/Header';
import Row from 'react-bootstrap/Row';


function App() {
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [round, setRound] = useState(ROUNDS[currentRoundIndex]);
  const [gameState, setGameState] = useState('playing'); // playing | submitted
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null); // boolean | null

  // Shuffle answers whenever a new round begins
  useEffect(() => {
    // Make a copy to avoid mutating the original data
    const shuffledAnswers = [...ROUNDS[currentRoundIndex].answers];
    shuffle(shuffledAnswers);
    setRound({ ...ROUNDS[currentRoundIndex], answers: shuffledAnswers });
  }, [currentRoundIndex]);


  const handleSelectAnswer = (answerId) => {
    // Allow selection only during the 'playing' state
    if (gameState === 'playing') {
      setSelectedAnswerId(prevId => prevId === answerId ? null : answerId);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswerId === null) return; // Don't submit if nothing is selected

    const correct = selectedAnswerId === round.correctAnswerId;
    setIsCorrect(correct);
    setGameState('submitted');
  };

  const handleNextRound = () => {
    setGameState('playing');
    setSelectedAnswerId(null);
    setIsCorrect(null);
    setCurrentRoundIndex(prevIndex => (prevIndex + 1) % ROUNDS.length);
  }

  const playerHandRendered = round.answers.map((answer) => (
    <Answer
      key={answer.id}
      {...answer}
      isSelected={selectedAnswerId === answer.id}
      onSelect={() => handleSelectAnswer(answer.id)}
      isSubmitted={gameState === 'submitted'}
      isCorrect={isCorrect}
      isActuallyCorrect={answer.id === round.correctAnswerId}
    />
  ));

  return (
    <Container className="py-3">
      <Header />
      <main>
        <Container className="p-3 prompt-banner bg-light rounded-3">
          <Row className="row mb-3 justify-content-center align-items-center">
            <Prompt text={round.prompt.text} />
          </Row>

          <hr />

          <div className="d-grid gap-2">
            {gameState === 'playing' ? (
              <Button
                variant="primary"
                size="lg"
                onClick={handleSubmit}
                disabled={selectedAnswerId === null}
              >
                Submit Answer
              </Button>
            ) : (
              <Button
                variant={isCorrect ? "success" : "danger"}
                size="lg"
                onClick={handleNextRound}
              >
                Next Round
              </Button>
            )}
          </div>

          <br />
            <Row className={`answer-card-container ${gameState}`}>
              {playerHandRendered}
            </Row>
        </Container>
      </main>
    </Container>
  );
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
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default App;
