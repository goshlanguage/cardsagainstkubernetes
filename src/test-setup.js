import '@testing-library/jest-dom';

// jsdom doesn't enable localStorage without a proper URL - provide a minimal stub.
const store = {};
const localStorageMock = {
  getItem: (key) => store[key] ?? null,
  setItem: (key, value) => { store[key] = String(value); },
  removeItem: (key) => { delete store[key]; },
  clear: () => { Object.keys(store).forEach((k) => delete store[k]); },
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
