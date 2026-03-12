import { describe, it, expect } from 'vitest';
import { gameData } from './gameData';

// ── helpers ──────────────────────────────────────────────────────────────────

const deckNames = Object.keys(gameData.decks);

// ── data integrity ────────────────────────────────────────────────────────────

describe('gameData structure', () => {
  it('has at least one deck', () => {
    expect(deckNames.length).toBeGreaterThan(0);
  });

  it('has a studyGuides map', () => {
    expect(gameData.studyGuides).toBeDefined();
  });
});

describe.each(deckNames)('deck "%s"', (deckName) => {
  const deck = gameData.decks[deckName];

  it('has a passingPercentage between 1 and 100', () => {
    expect(deck.passingPercentage).toBeGreaterThan(0);
    expect(deck.passingPercentage).toBeLessThanOrEqual(100);
  });

  it('has at least one round', () => {
    expect(deck.rounds.length).toBeGreaterThan(0);
  });

  it('has at least one answer', () => {
    expect(Object.keys(deck.answers).length).toBeGreaterThan(0);
  });

  describe('answer integrity', () => {
    it('every answer has an id and at least one line', () => {
      for (const [key, answer] of Object.entries(deck.answers)) {
        expect(answer.id, `answers.${key} missing id`).toBeDefined();
        expect(answer.lines, `answers.${key} missing lines`).toBeDefined();
        expect(answer.lines.length, `answers.${key} has empty lines`).toBeGreaterThan(0);
      }
    });

    it('every answer id is unique within the deck', () => {
      const ids = Object.values(deck.answers).map((a) => a.id);
      const unique = new Set(ids);
      expect(unique.size).toBe(ids.length);
    });
  });

  describe('round integrity', () => {
    deck.rounds.forEach((round, i) => {
      const label = `round[${i}] "${round.prompt?.text?.slice(0, 50)}"`;

      it(`${label}: prompt has text`, () => {
        expect(round.prompt?.text).toBeTruthy();
      });

      it(`${label}: correctAnswerId maps to a real answer`, () => {
        const found = Object.values(deck.answers).some(
          (a) => a.id === round.correctAnswerId
        );
        expect(found, `correctAnswerId "${round.correctAnswerId}" not found in answers`).toBe(true);
      });

      it(`${label}: all answer keys in the round exist in answers`, () => {
        const missing = round.answers.filter((key) => !(key in deck.answers));
        expect(missing, `missing answer keys: ${missing.join(', ')}`).toHaveLength(0);
      });

      it(`${label}: correctAnswerId is one of the round's listed answer keys`, () => {
        const correct = Object.entries(deck.answers).find(
          ([, a]) => a.id === round.correctAnswerId
        );
        if (!correct) return; // already caught above
        const [correctKey] = correct;
        expect(
          round.answers,
          `correctAnswerId key "${correctKey}" not in round answers list`
        ).toContain(correctKey);
      });

      it(`${label}: has no duplicate answer keys`, () => {
        const unique = new Set(round.answers);
        expect(unique.size).toBe(round.answers.length);
      });

      it(`${label}: tag maps to a studyGuide entry`, () => {
        if (!round.tag) return; // untagged rounds are a separate concern
        expect(
          gameData.studyGuides[round.tag],
          `tag "${round.tag}" has no entry in studyGuides`
        ).toBeDefined();
      });
    });
  });
});
