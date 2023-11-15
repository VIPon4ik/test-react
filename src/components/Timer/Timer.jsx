import React, { useEffect, useState } from 'react'

export default function Timer() {
  const [timer, setTimer] = useState(() => new Date())

  useEffect(() => {
    const intervalId = setInterval(() => setTimer(new Date()), 1000);
  })

  return (
    <div>
      <h1>Timer</h1>
      <h2>Now: {timer.toLocaleTimeString()}</h2>
    </div>
  )
}
