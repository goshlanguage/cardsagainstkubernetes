// This file defines the content for the game rounds.
// By separating the game data from the component logic, we can easily
// add new prompts and answers without changing the core application code.

// First, we define all possible answer cards as a dictionary of objects.
// This allows us to reuse answers across different prompts if needed.
export const ANSWERS = {
  // Correct Answer for the 'Pillars' prompt
  CORRECT_PILLARS: {
    id: 'correct_pillars',
    title: 'The Four Pillars',
    lines: [
      'Containers',
      'Microservices',
      'Service Mesh',
      'Immutable Infrastructure',
    ],
  },
  // Decoy Answers
  FOUR_CS: {
    id: 'four_cs',
    title: "The 4 C's of",
    titlealt: 'Cloud Native Security',
    lines: ['Cloud', 'Cluster', 'Container', 'Code'],
  },
  GOLDEN_SIGNALS: {
    id: 'golden_signals',
    title: 'The Four',
    titlealt: 'Golden Signals',
    lines: ['Latency', 'Traffic', 'Errors', 'Saturation'],
  },
  CIS_BENCHMARK: {
    id: 'cis_benchmark',
    title: 'CIS Kubernetes',
    titlealt: 'Benchmark',
    lines: ['Control Plane', 'Worker Nodes', 'etcd', 'Policies'],
  },
  ANTI_PILLARS: {
    id: 'anti_pillars',
    title: "The 'Anti'-Pillars",
    lines: ['Virtual Machines', 'Monoliths', 'FTP', 'Snowflake Servers'],
  },
};

// Next, we define an array of "rounds". Each round consists of a prompt,
// a hand of answer cards, and the ID of the correct answer.
export const ROUNDS = [
  {
    prompt: {
      text: "What are the four pillars of the Cloud Native Computing Foundation (CNCF) definition of 'Cloud Native'",
    },
    // The hand of cards for this round is composed of the correct answer and the decoys.
    answers: [
      ANSWERS.CORRECT_PILLARS,
      ANSWERS.FOUR_CS,
      ANSWERS.GOLDEN_SIGNALS,
      ANSWERS.CIS_BENCHMARK,
      ANSWERS.ANTI_PILLARS,
    ],
    // We specify the ID of the correct answer for this round.
    correctAnswerId: 'correct_pillars',
  },
  // To add a new round, we would just add another object here.
  // Example:
  // {
  //   prompt: { text: 'Your next retrospective will be caused by ____________' },
  //   answers: [ ANSWERS.DNS, ANSWERS.WRONG_CONTEXT, ... ],
  //   correctAnswerId: null, // Some rounds might not have a "correct" answer
  // }
];
