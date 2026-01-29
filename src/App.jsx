import { useState, useEffect } from 'react';
import './App.css';
import { gameData } from './gameData'; // Import the new data structure
import Answer from './components/Answer'; // Import the generic Answer component
import Prompt from './components/Prompt'; // Import the generic Prompt component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Header from './components/Header';
import Row from 'react-bootstrap/Row';

function App() {
  const [currentDeck, setCurrentDeck] = useState('KCNA');
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [round, setRound] = useState(
    gameData.decks[currentDeck].rounds[currentRoundIndex]
  );
  const [gameState, setGameState] = useState('playing'); // playing | submitted
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null); // boolean | null

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize state from localStorage or default to false
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const handleDeckChange = (deckName) => {
    setCurrentDeck(deckName);
    setCurrentRoundIndex(0); // Reset round index when deck changes
  };

  // Effect to apply the class and save to localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Shuffle answers whenever a new round begins
  useEffect(() => {
    const currentAnswers = gameData.decks[currentDeck].answers;
    const currentRoundData =
      gameData.decks[currentDeck].rounds[currentRoundIndex];

    // Map answer keys to full answer objects
    const answers = currentRoundData.answers.map(
      (answerKey) => currentAnswers[answerKey]
    );

    // Make a copy to avoid mutating the original data
    const shuffledAnswers = [...answers];
    shuffle(shuffledAnswers);

    setRound({ ...currentRoundData, answers: shuffledAnswers });
  }, [currentRoundIndex, currentDeck]);

  const handleSelectAnswer = (answerId) => {
    // Allow selection only during the 'playing' state
    if (gameState === 'playing') {
      setSelectedAnswerId((prevId) => (prevId === answerId ? null : answerId));
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
    setCurrentRoundIndex(
      (prevIndex) =>
        (prevIndex + 1) % gameData.decks[currentDeck].rounds.length
    );
  };

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
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        handleDeckChange={handleDeckChange}
        currentDeck={currentDeck}
      />
      <main>
        <Container className="p-3 prompt-banner bg-light rounded-3">
          <Row className="row mb-3 justify-content-center align-items-center">
            <Prompt text={round.prompt.text} />
          </Row>

          <div className="d-grid gap-2">
            {gameState === 'playing' ? (
              <Button
                variant="primary"
                size="lg"
                onClick={handleSubmit}
                disabled={selectedAnswerId === null}
                className="ubuntu"
              >
                Submit Answer
              </Button>
            ) : (
              <Button
                variant={isCorrect ? 'success' : 'danger'}
                size="lg"
                onClick={handleNextRound}
                className="ubuntu"
              >
                Next Round
              </Button>
            )}
          </div>

          <br />
          <Row className={`answer-card-container mt-4 ${gameState}`}>
            {playerHandRendered}
          </Row>
        </Container>

        <hr />
        <div className="d-flex justify-content-end footer-link">
          <a href="https://hartje.io">HARTJE.IO</a> <span className="mx-2">|</span>
          <a href="https://github.com/goshlanguage/cardsagainstkubernetes">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </main>
    </Container>
  );
}

// unbiased shuffle algorithm (Fisher-Yates aka Knuth shuffle)
//    https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

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
