import React from 'react';

export function Todo({ text }) {
  return <li>{text}</li>;
}
//don't remove export
export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

export default function App() {
  return (
    <ul>
      {DUMMY_TODOS.map((item) => (
        <Todo key={item} text={item} />
      ))}
    </ul>
  );
}