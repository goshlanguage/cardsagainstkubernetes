import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

// ── console error spy ─────────────────────────────────────────────────────────

let consoleErrors = [];

beforeEach(() => {
  consoleErrors = [];
  vi.spyOn(console, 'error').mockImplementation((...args) => {
    consoleErrors.push(args.join(' '));
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

function assertNoConsoleErrors() {
  expect(
    consoleErrors,
    `Unexpected console.error calls:\n${consoleErrors.join('\n')}`
  ).toHaveLength(0);
}

// ── rendering tests ───────────────────────────────────────────────────────────

describe('App', () => {
  it('renders without crashing or console errors', () => {
    render(<App />);
    assertNoConsoleErrors();
  });

  it('shows the submit button on load', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /submit answer/i })).toBeInTheDocument();
    assertNoConsoleErrors();
  });

  it('shows the KCNA deck nav link', () => {
    render(<App />);
    expect(screen.getByText('KCNA')).toBeInTheDocument();
    assertNoConsoleErrors();
  });

  it('shows the KCSA deck nav link', () => {
    render(<App />);
    expect(screen.getByText('KCSA')).toBeInTheDocument();
    assertNoConsoleErrors();
  });
});
