export {};

declare global {
  interface Window {
    /**
     * Yandex Metrika API. Present after consent loads tag.js (or the stub).
     * Call shapes: init / hit / reachGoal — see Metrika JS API docs.
     */
    ym?: (counterId: number, method: string, ...args: unknown[]) => void;
  }
}
