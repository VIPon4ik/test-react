import React, { useEffect, useRef, useState } from 'react'

const SkipEffectOnFirstRender = () => {
  const [value, setValue] = useState(0);
  const ifFirstRender = useRef(true);

  useEffect(() => {
    if (ifFirstRender.current) {
      ifFirstRender.current = false;
      return;
    }

    console.log(`Виконується useEffect - ${Date.now()}`)
  })

  return (
    <div>
      <button type='button' onClick={() => setValue(v => v + 1)}>{value}</button>
    </div>
  )
}

export default SkipEffectOnFirstRender
