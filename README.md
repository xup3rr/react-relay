# 🏗 WIP ( It is not suitable yet )

### TL;DR

`useRelay` is a react hook that use the Observable pattern to effortlessly update every state instance across the application.

---

# React Relay ⚡️

## Introduction

This Vite project is designed to be a simple and efficient global state management solution for React applications using custom React hooks. It provides a convenient way to share and manage state across your components without the need for complex state management libraries.

## Getting Started

Follow these steps to integrate this global state management library into your Vite project:

1. **Installation:**

   ```bash
   npm install --save react-relay
   ```

   ```bash
   yarn add react-relay
   ```

2. **Usage:**

   Import the `useRelay` hook from the library where you need global state management:

   ```jsx
   import { useRelay } from "react-relay";
   ```

   Use the `useRelay` hook to manage your global state. It takes an initial state as a parameter and returns both the current state and a function to update it.

   ```jsx
   const [state, setState] = useRelay(initialState);
   ```

   - `state`: The current state.
   - `setState`: A function to update the state.

3. **Observable:**

   This library utilizes an `Observable` to handle state changes. The `Observable` object has two methods:

   - `subscribe(observer: (data: any) => void)`: Subscribe an observer function to listen for state changes.
   - `notify(data: any)`: Notify all subscribed observers with new data.

   You can also use the `Observable` directly if needed.

   ```jsx
   import { Observable } from "react-relay";
   ```

## Example

Here is a simple example of how to use the library to manage global state in your React components:

```jsx
import React from "react";
import { useRelay } from "react-relay";

function MyComponent() {
  const [state, setState] = useRelay("initialValue");

  const handleButtonClick = () => {
    setState("newValue");
  };

  return (
    <div>
      <p>Global State: {state}</p>
      <button onClick={handleButtonClick}>Change State</button>
    </div>
  );
}

export default MyComponent;
```

## Advanced Usage

- You can use the `Observable` to create your own custom global state management solutions, even outside React components.

- You can import the `Observable` in multiple files to subscribe and notify state changes across your entire application.

- For more complex state structures, you can pass objects or custom state management functions to `useRelay`.

## License

This library is open-source and available under the [MIT License](LICENSE.md).

## Contributions

Contributions are welcome! Feel free to open issues, submit pull requests, or suggest improvements to make this library even better.

## Acknowledgments

This library is built with the intent of simplifying global state management in React applications. We hope it makes your development process smoother and more efficient.

Happy coding!
