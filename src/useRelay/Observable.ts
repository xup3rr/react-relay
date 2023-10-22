/* eslint-disable @typescript-eslint/no-explicit-any */

type Observer = (arg: any) => void;

const observers: Array<Observer> = [];

export const Observable = Object.freeze({
  subscribe: (observer: Observer) => observers.push(observer),
  notify: (data: any) => observers.forEach((observer) => observer(data)),
});

//TODO: add unsubscribe to remove from observers. keep track by instance or some id

// export class Volt {
//   subscribe: (observer: Observer) => number;
//   notify: (data: any) => void;

//   constructor() {
//     this.subscribe = (observer: Observer) => observers.push(observer);
//     this.notify = (data: any) =>
//       observers.forEach((observer) => observer(data));
//   }
// }
