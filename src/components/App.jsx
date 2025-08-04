import React, { useState } from "react";

function App() {
  const [isDone, setIsDone] = useState();

  function strike() {
    setIsDone(true);
  }

  function unStrike() {
    setIsDone(false);
  }

  return (
    <div>
      <h1 style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</h1>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
