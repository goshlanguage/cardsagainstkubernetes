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
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

// unbiased shuffle algorithm (Fisher-Yates aka Knuth shuffle)
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

function ScoreScreen({ score, totalQuestions, incorrectAnswers, playAgain }) {
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    
    // Tally up the tags from incorrect answers
    const incorrectTags = incorrectAnswers.reduce((acc, round) => {
        if (round.tag) {
            acc[round.tag] = (acc[round.tag] || 0) + 1;
        }
        return acc;
    }, {});

    // Get unique tags to show each guide only once
    const uniqueIncorrectTags = Object.keys(incorrectTags);

    return (
        <Container className="py-3">
            <main>
                <Container className="p-4 prompt-banner bg-light rounded-3 text-center">
                    <h1 className="display-4">Deck Complete!</h1>
                    <p className="lead">You scored</p>
                    <h2 className="display-1">{percentage}%</h2>
                    <p className="lead mb-4">({score} out of {totalQuestions} correct)</p>
                    
                    {uniqueIncorrectTags.length > 0 && (
                        <>
                            <hr />
                            <h3 className="mt-4">Study Guide</h3>
                            <p>Based on your answers, here are some areas to focus on:</p>
                            <Row className="justify-content-center">
                                {uniqueIncorrectTags.map(tag => {
                                    const guide = gameData.studyGuides[tag];
                                    if (!guide) return null;
                                    return (
                                        <Col md={6} lg={4} key={tag} className="mb-3">
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>{guide.title}</Card.Title>
                                                    <Card.Text>{guide.tip}</Card.Text>
                                                    <Button variant="primary" href={guide.link} target="_blank">Learn More</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </>
                    )}

                    <Button variant="success" size="lg" onClick={playAgain} className="mt-4 ubuntu">
                        Play Again
                    </Button>
                </Container>
            </main>
        </Container>
    );
}

function App() {
  const [currentDeck, setCurrentDeck] = useState('KCNA');
  const [shuffledRounds, setShuffledRounds] = useState([]);
  const [roundCounter, setRoundCounter] = useState(0);
  const [round, setRound] = useState(null);
  const [gameState, setGameState] = useState('playing'); // playing | submitted | finished
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null); // boolean | null
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const setupDeck = (deckName) => {
    const newRounds = [...gameData.decks[deckName].rounds];
    shuffle(newRounds);
    setShuffledRounds(newRounds);
    setRoundCounter(0);
    setScore(0);
    setIncorrectAnswers([]);
    setGameState('playing');
    setRound(null); // Explicitly set round to null to show loading state
  };

  // Effect to setup deck on initial load and when deck changes
  useEffect(() => {
    setupDeck(currentDeck);
  }, [currentDeck]);

  // Effect to set up the current round
  useEffect(() => {
    if (shuffledRounds.length > 0 && roundCounter < shuffledRounds.length) {
      const currentRoundData = shuffledRounds[roundCounter];
      const allAnswers = gameData.decks[currentDeck].answers;
      const { correctAnswerId, answers: answerKeys } = currentRoundData;

      const correctAnswerKey = Object.keys(allAnswers).find(key => allAnswers[key].id === correctAnswerId);

      if (!correctAnswerKey) {
        console.error("Data inconsistency: Could not find the correct answer key for round:", currentRoundData);
        return;
      }

      const decoys = answerKeys.filter(key => key !== correctAnswerKey);
      shuffle(decoys);

      const selectedDecoys = decoys.slice(0, 3);
      const handKeys = [correctAnswerKey, ...selectedDecoys];
      shuffle(handKeys);

      const handObjects = handKeys.map(key => allAnswers[key]);

      setRound({ ...currentRoundData, answers: handObjects });
    }
  }, [shuffledRounds, roundCounter]); // Removed currentDeck dependency to fix race condition

  const handleDeckChange = (deckName) => {
    setCurrentDeck(deckName);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleSelectAnswer = (answerId) => {
    if (gameState === 'playing') {
      setSelectedAnswerId((prevId) => (prevId === answerId ? null : answerId));
    }
  };

  const handleSubmit = () => {
    if (selectedAnswerId === null) return;

    const correct = selectedAnswerId === round.correctAnswerId;
    if (correct) {
        setScore(prevScore => prevScore + 1);
    }
    else {
        setIncorrectAnswers(prev => [...prev, round]);
    }
    setIsCorrect(correct);
    setGameState('submitted');
  };

  const handleNextRound = () => {
    if (roundCounter + 1 < shuffledRounds.length) {
      setGameState('playing');
      setSelectedAnswerId(null);
      setIsCorrect(null);
      setRoundCounter(prevCounter => prevCounter + 1);
    }
    else {
      setGameState('finished');
    }
  };
  
  if (gameState === 'finished') {
    return <ScoreScreen 
        score={score}
        totalQuestions={shuffledRounds.length}
        incorrectAnswers={incorrectAnswers}
        playAgain={() => setupDeck(currentDeck)}
    />
  }

  if (!round) {
    return (
        <Container className="py-3 text-center">
            <h1>Loading Deck...</h1>
        </Container>
    );
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
          <a href="https://hartje.io" target="_blank">Hartje.io</a> <span className="mx-2">|</span>
          <a href="https://github.com/goshlanguage/cardsagainstkubernetes" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </main>
    </Container>
  );
}

export default App;
