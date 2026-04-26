import { useState } from 'react';

export default function App() {
  const [showAlert, setShowAlert] = useState(false);

  let alert = null;
  if (showAlert) {
    alert = (
      <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={() => setShowAlert(false)}>Proceed</button>
      </div>
    );
  }

  return (
    <div>
      {alert}
      <button onClick={() => setShowAlert(true)}>Delete</button>
    </div>
  );
}