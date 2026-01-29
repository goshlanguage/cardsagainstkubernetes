# Cards Against Kubernetes

A set of resources for studying for the kcna, kcsa, ckad, cka, and cks certifications from the CNCF.

With inspiration taken from CardsAgainstHumanity, the printable decks aim to act as flash cards.

The HTML version can be played in a single player mode as a rogue like. How far can you get through the study guantlet?

## Features

This application provides a "rogue-like" study experience with the following features to enhance learning and replayability:

### Dynamic Gameplay

- **Randomized Question Order:** Each time you start a deck, the order of the questions is shuffled, preventing you from simply memorizing the sequence.
- **Randomized Answers:** To add a layer of challenge, for each question, you are presented with 4 answer choices: the one correct answer and three randomly selected "decoy" answers from a larger pool. This means you'll see a different set of incorrect choices each time you encounter a question.

### Scoring & Personalized Study Guide

- **End-of-Game Scoring:** After completing a full pass through a deck, you are presented with a score screen showing your performance as a percentage.
- **Personalized Feedback:** Based on the questions you answered incorrectly, the app generates a personalized study guide. Each question is tagged with a specific curriculum area (e.g., "Kubernetes Fundamentals", "Network Security"). The guide highlights the areas where you struggled and provides links to official documentation or relevant resources to help you improve.

## Development

### Getting started

To get started, install the dependencies:

```bash
yarn install
```

Then run the development server:

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.
