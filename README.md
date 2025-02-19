# React setInterval Memory Leak

This repository demonstrates a common error in React components: using `setInterval` within `useEffect` without proper cleanup. This can lead to memory leaks and unexpected behavior.

## The Bug
The `bug.js` file contains a React component that uses `setInterval` to update a counter every second.  However, it lacks the necessary cleanup function to stop the interval when the component unmounts. This results in the interval continuing to run indefinitely, even after the component is no longer rendered. This causes a memory leak because the interval keeps the component in memory.

## The Solution
The `bugSolution.js` file demonstrates the corrected code.  The `useEffect` hook now returns a cleanup function that uses `clearInterval` to stop the interval when the component unmounts. This prevents the memory leak.

## How to Run
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
