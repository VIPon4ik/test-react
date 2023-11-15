import React, { useEffect, useState } from 'react'

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    console.log('kurwa');
  }, [counterA]);
  
  return (
    <div>
      <button type='button' onClick={() => setCounterA(prevState => prevState + 1)}>Counter A, clicked {counterA} times</button>
      <button type='button' onClick={() => setCounterB(prevState => prevState + 1)}>Counter B, clicked {counterB} times</button>
    </div>
  )
}
