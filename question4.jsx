import { useState } from 'react';
import './App.css'; 

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive(!isActive);
  }

  return (
    <div>
      <p className={isActive ? 'active' : ''}>Style me!</p>
      <button onClick={handleToggle}>Toggle style</button>
    </div>
  );
}