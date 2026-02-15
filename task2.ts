/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать класс Cache

class Cache {
  private cache: Record<string, unknown> = {};

  constructor(private readonly fn: (...args: unknown[]) => unknown) {}

  call(...args: unknown[]) {}

  clear(): void {}

  get size(): number {
    return 0;
  }
}

const func = new Cache(() => Math.random());

console.log(func.call());
console.log(func.call());
console.log(func.size);
