import '@testing-library/jest-dom'

// Mocks nécessaires pour Framer Motion et les composants React
global.IntersectionObserver = class IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  
  constructor() {}
  
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
  takeRecords() { return []; }
} as any;

global.ResizeObserver = class ResizeObserver {
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
} as any;
