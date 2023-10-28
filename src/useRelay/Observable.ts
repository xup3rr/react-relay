/* eslint-disable @typescript-eslint/no-explicit-any */
//TODO: add unsubscribe to remove from observers. keep track by instance or some id

type Observer<T> = (arg: T) => void;

export class Volt<T> {
  initialData: T;
  observers: Array<Observer<T>> = [];
  subscribe: (observer: Observer<T>) => number;
  notify: (data: T) => void;

  constructor(initialData: T extends (...args: any[]) => any ? never : T) {
    this.initialData = initialData;
    this.subscribe = (observer: Observer<T>) => this.observers.push(observer);
    this.notify = (data: T) =>
      this.observers.forEach((observer) => observer(data));
  }
}
